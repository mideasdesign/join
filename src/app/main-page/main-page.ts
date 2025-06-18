import { Component, ViewChild } from '@angular/core';
import { Contacts } from '../contacts-sektion/contacts/contacts';
import { AddContacts } from '../contacts-sektion/add-contacts/add-contacts';

@Component({
  selector: 'app-main-page',
  imports: [Contacts, AddContacts],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  @ViewChild(AddContacts) addContactsComponent!: AddContacts;

  openAddContactsPopup(): void {
    if (this.addContactsComponent) {
      this.addContactsComponent.openPopup();
    }
  }
}
