import { Component, EventEmitter, Input, Output } from '@angular/core';

type Options = {
  id: string;
  label: string;
};

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  blockName = 'select';
  @Input() placeholder: string = 'Select';
  @Input() options: Options[] = [];
  @Output() selection = new EventEmitter<string>();
}
