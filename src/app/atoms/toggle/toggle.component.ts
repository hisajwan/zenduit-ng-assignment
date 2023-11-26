import { Component, EventEmitter, Output } from '@angular/core';
import { TOGGLE_TABS } from '../../utils/constants/toggle';

type Tab = {
  id: string;
  label: string;
  isActive: boolean;
};

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
})
export class ToggleComponent {
  @Output() toggle = new EventEmitter<string>();

  blockName = 'tabs';
  tabs: Tab[] = TOGGLE_TABS;

  handleToggle(tab: Tab) {
    this.tabs = TOGGLE_TABS.map((list) => ({
      ...list,
      isActive: list.id === tab.id,
    }));
    this.toggle.emit(tab.id);
  }
}
