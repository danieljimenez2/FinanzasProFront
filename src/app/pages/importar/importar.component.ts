import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImportarService } from '../../shared/services/importar.service';

@Component({
  selector: 'app-importar',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './importar.component.html',
  styleUrls: ['./importar.component.scss']
})
export class ImportarComponent implements OnInit {

  selectedFile: File | null = null;
  isDragOver = false;
  showError = false;

  constructor(private importService: ImportarService) { }

  ngOnInit() { }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    this.isDragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragOver = false;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      this.showError = false;
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.showError = false;
    }
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.showError = true;
      return;
    }
    this.importService.sendImportCvs(this.selectedFile);
  }
}
