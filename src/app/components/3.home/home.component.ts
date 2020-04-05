import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, RouterEvent, NavigationEnd, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

interface SideNavLink {
  caption: string;
  icon: string;
  ariaLabel: string;
  route: string[];
}

type SideNaveToggleIcon = 'chevron_left' | 'chevron_right';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  /* ATTRIBUTES */
  public MenuCaption: string;
  public sideNavLinks: SideNavLink[];
  public sideNavToggleIcon: SideNaveToggleIcon;
  public toolBarColor: string;
  public selectedSpace: string;
  private routerSubscription: Subscription;

  /* TEMP */
  public signifier = true;
  /* TEMP */

  /** CONSTRUCTOR */
  constructor(private router: Router) {
    const routeToAppend = ['/', 'main'];
    this.routerSubscription = new Subscription();
    this.sideNavToggleIcon = 'chevron_left';
    this.selectedSpace = 'Workspace';
    this.toolBarColor = 'accent';
    this.MenuCaption = 'Menu';
    this.sideNavLinks = [
      {
        caption: 'Purchase Orders',
        icon: 'assignment',
        ariaLabel: 'Price List Nav Control',
        route: [...routeToAppend, 'purchase-orders']
      },
      {
        caption: 'Suppliers',
        icon: 'assignment_ind',
        ariaLabel: 'Suppliers Nav Control',
        route: [...routeToAppend, 'suppliers']
      },
      {
        caption: 'Products',
        icon: 'local_pizza',
        ariaLabel: 'I want pizza!',
        route: [...routeToAppend, 'products']
      },
      {
        caption: 'Prices',
        icon: 'assessment',
        ariaLabel: 'Price List Nav Control',
        route: [...routeToAppend, 'price-list']
      }
    ];

  }

  /* LIFE HOOKS */
  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe((event: RouterEvent) => {
      // Runs in routing life cycle event NavigationEnd
      if (event instanceof NavigationEnd) {
        this.updateWorkSpaceCaption(event.url).route = event.url;
      }
      // Runs in routing life cycle event ActivationEnd
      if (event instanceof ActivationEnd) {
        if (Object.entries(event.snapshot.data).length > 0) {
          this.selectedSpace = event.snapshot.data.workspaceTitle;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  /* METHODS */
  flipToggleIcon = (state: boolean): SideNaveToggleIcon =>
    this.sideNavToggleIcon = state ? 'chevron_left' : 'chevron_right'

  updateWorkSpaceCaption(url: string): any {

    return this.sideNavLinks.filter((link: SideNavLink) => {

      const strA = [link.route[1], link.route[2]].join('/');
      const strB = [url.split(/\//)[1], url.split(/\//)[2]].join('/');

      if (strA === strB) {
        return link;
      }

    });
  }

  /* EVENTS */
  toggleDrawer(drawerElement: MatDrawer) {
    drawerElement.toggle();
    this.flipToggleIcon(drawerElement.opened);
  }

  // Temp event

  tempEventHideSignifier() {
    this.signifier = false;
  }
}
