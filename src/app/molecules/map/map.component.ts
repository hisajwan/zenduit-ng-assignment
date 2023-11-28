import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SubmissionsType } from '../../models';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  @Input() data: SubmissionsType[] | undefined;
  @ViewChildren(MapInfoWindow) infoWindowsView:
    | QueryList<MapInfoWindow>
    | undefined;
  markers = [] as Array<{
    data: SubmissionsType;
    position: { lat: number; lng: number };
    options: { icon: string; animation: google.maps.Animation };
  }>;
  center: google.maps.LatLngLiteral = { lat: 29, lng: 80 };
  zoom = 6;
  options: google.maps.MapOptions = {
    mapTypeId: 'terrain',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 4,
    streetViewControl: false,
    mapTypeControl: false,
    panControl: true,
  };

  ngOnInit() {
    this.setMarkers();
    this.center = this.data
      ? { lat: this.data[0].lat, lng: this.data[0].lng }
      : this.center;
  }

  openInfoWindow(marker: MapMarker, windowIndex: number) {
    let currentIndex = 0;
    this.infoWindowsView?.forEach((window: MapInfoWindow) => {
      if (windowIndex === currentIndex) {
        window.open(marker);
        currentIndex++;
      } else {
        window.close();
        currentIndex++;
      }
    });
  }

  setMarkers() {
    return (
      this.data &&
      this.data.forEach((marker) => {
        this.markers.push({
          data: marker,
          position: {
            lat: marker.lat,
            lng: marker.lng,
          },
          options: {
            icon: 'assets/icons/marker.svg',
            animation: google.maps.Animation.DROP,
          },
        });
      })
    );
  }
}
