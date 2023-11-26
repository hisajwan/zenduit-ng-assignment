import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss',
})
export class SubmissionsComponent {
  blockName = 'submissions';

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
