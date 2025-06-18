import { Component, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [],
  templateUrl: './add-contacts.html',
  styleUrls: ['./add-contacts.scss']
})
export class AddContacts implements OnDestroy {
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
  isOpen = false;
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void {
    this.isOpen = false;
  }
}
