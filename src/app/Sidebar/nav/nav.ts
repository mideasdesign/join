import {Component, OnDestroy, signal} from '@angular/core';
import {Subscription} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav implements OnDestroy {
  isMobile = signal(false);
  private breakpointSubscription: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this.breakpointObserver
      .observe(['(max-width: 616px)'])
      .subscribe(result => this.isMobile.set(result.matches));
  }

  ngOnDestroy(): void {
    if (this.breakpointSubscription) {
      this.breakpointSubscription.unsubscribe();
    }
  }
}
