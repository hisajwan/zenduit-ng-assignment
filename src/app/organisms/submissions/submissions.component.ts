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

  handleSearch($event: any) {
    console.log('Search');
  }

  handleSelect($event: any) {
    console.log('Selected');
  }

  handleExport(event: any) {
    console.log('Exported');
  }

  handleDateChange(event: any) {
    console.log('Date Selected');
  }

  handleTabchange(event: any) {
    console.log(`${event} selected`);
  }
}
