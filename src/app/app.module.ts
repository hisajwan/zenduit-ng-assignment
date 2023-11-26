import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { CardComponent } from './atoms/card/card.component';
import { DatePickerComponent } from './atoms/date-picker/date-picker.component';
import { SearchComponent } from './atoms/search/search.component';
import { SelectComponent } from './atoms/select/select.component';
import { ToggleComponent } from './atoms/toggle/toggle.component';
import { MapComponent } from './molecules/map/map.component';
import { NavigationComponent } from './molecules/navigation/navigation.component';
import { SubmissionsComponent } from './organisms/submissions/submissions.component';
import { PageNotFoundComponent } from './organisms/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExportComponent } from './atoms/export/export.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DatePickerComponent,
    SearchComponent,
    SelectComponent,
    ToggleComponent,
    MapComponent,
    NavigationComponent,
    SubmissionsComponent,
    PageNotFoundComponent,
    ExportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  providers: [GoogleMap],
  bootstrap: [AppComponent],
})
export class AppModule {}
