import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrl: './submissions.component.scss',
})
export class SubmissionsComponent {
  blockName = 'submissions';

  handleExport(event: any) {
    alert('Exported');
  }
}
