import { Component } from '@angular/core';
import { NavItemsList } from '../../models';
import { NAVIGATION_LIST } from '../../utils/constants/navigation';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  blockName = 'nav';
  title = 'ZenduForms';
  selectedItem: NavItemsList | undefined;
  itemsList: NavItemsList[] = NAVIGATION_LIST;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.itemsList = NAVIGATION_LIST.map((list) => ({
          ...list,
          isActive:
            val.url.includes(list.path) || list.id === this.selectedItem?.id,
        }));
      }
    });
  }

  redirectTo(item: NavItemsList) {
    this.selectedItem = item;
    this.router.navigate([item.path]);
  }
}
