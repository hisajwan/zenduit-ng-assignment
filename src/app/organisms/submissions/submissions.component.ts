import { Component } from '@angular/core';
import { MOCK_DATA } from '../../utils/mocks';
import { SubmissionsType } from '../../models';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss',
})
export class SubmissionsComponent {
  blockName: string = 'submissions';
  submissionsData: SubmissionsType[] = MOCK_DATA;

  handleSearch($event: string) {
    console.log(`Search`, $event);
  }

  handleSelect($event: string) {
    console.log('Selected', $event);
  }

  handleExport($event: string) {
    console.log('Exported', $event);
  }

  handleDateChange($event: string) {
    console.log('Date Selected', $event);
  }

  handleTabchange($event: string) {
    console.log(`selected`, $event);
  }
}
