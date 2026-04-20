import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDataPipe } from '../pipes/format-data-pipe';
import { InitialsAvatar } from '../components/initials-avatar/initials-avatar';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, FormatDataPipe, InitialsAvatar],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css'
})
export class ContactCard {
  
  @Input() contact: any; 

  @Output() select = new EventEmitter<any>();

  toggleFavorite() {
    this.contact.favorite = !this.contact.favorite;
  }

  viewDetails() {
    this.select.emit(this.contact);
  }
}
