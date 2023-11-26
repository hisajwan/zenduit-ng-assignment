import { Component } from '@angular/core';
import { NavItemsList } from '../../models';
import { NAVIGATION_LIST } from '../../utils/constants/navigation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  blockName = 'nav';
  title = 'ZenduForms';
  itemsList: NavItemsList[] = NAVIGATION_LIST;

  constructor(private router: Router) {}

  redirectTo(item: NavItemsList) {
    this.itemsList = NAVIGATION_LIST.map((list) => ({
      ...list,
      isActive: list.id === item.id,
    }));
    this.router.navigate([item.path]);
  }
}
