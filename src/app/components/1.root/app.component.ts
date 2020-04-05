import { ActivatedRouteSnapshot, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Route } from '@angular/compiler/src/core';
import { WhoopsDialogService } from 'src/app/services/whoops-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  /* ATTR */
  left: string;
  route: Route;
  title: string;
  middle: any;
  welcome: boolean;
  userName: string;
  envIcons: string[];
  showImage: boolean;
  routeSnapShot: ActivatedRouteSnapshot;
  routerSubscription: Subscription;

  /* CONSTRUCTOR */
  constructor(private router: Router, private whoopsDialog: WhoopsDialogService) {
    this.showImage = true;
    this.title = 'PurchaseOrdersV2';
    this.left = 'Demo Application';
    this.middle = new ElementRef<HTMLImageElement>(document.createElement('img')).nativeElement.toString();
    this.welcome = true;
    this.envIcons = environment.icons;
    this.userName = 'Username';
    this.routerSubscription = new Subscription();
  }

  /* LIFE HOOKS */

  ngOnInit() {
    this.routerSubscription = this.router.events
      .subscribe((event: RouterEvent) =>
        (event instanceof NavigationEnd)
        && (this.welcome = (['/welcome', '/'].includes(event.url))));
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  /* EVENTS */

  openWhoops() {
    this.whoopsDialog.open();
  }

}

