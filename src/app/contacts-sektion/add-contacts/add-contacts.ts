import { Component, OnDestroy, signal, WritableSignal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-contacts.html',
  styleUrls: ['./add-contacts.scss']
})
export class AddContacts implements OnDestroy {
  isMobile: WritableSignal<boolean> = signal(false);
  private breakpointSubscription: Subscription;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointSubscription = this.breakpointObserver
        .observe(['(max-width: 949px)'])
        .subscribe(result => this.isMobile.set(result.matches));
  }
  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }

  isOpen = false;
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void { // ist link x close
    this.isOpen = false;
  }
}
