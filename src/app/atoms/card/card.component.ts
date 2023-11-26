import { Component, Input } from '@angular/core';
import { StatusType, SubmissionsType } from '../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: SubmissionsType | undefined;
  blockName = 'card';
  statusMap = {
    [StatusType.LOW_RISK]: 'Low Risk',
    [StatusType.UNCOMPLETE]: 'Uncomplete',
    [StatusType.NEEDS_REVIEW]: 'Needs Review',
  };

  getStatus(status: StatusType | undefined) {
    return status ? this.statusMap[status] : '';
  }

  getStatusClass(status: StatusType | undefined) {
    return `${this.blockName}__status--${status}`;
  }
}
