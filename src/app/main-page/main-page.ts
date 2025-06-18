import { Component } from '@angular/core';
import { Contacts } from '../contacts/contacts';

@Component({
  selector: 'app-main-page',
  imports: [Contacts],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
