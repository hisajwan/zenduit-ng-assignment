import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss',
})
export class ExportComponent {
  blockName = 'export';
  @Output() export = new EventEmitter<string>();
}
