import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDataPipe } from '../../pipes/format-data-pipe'; // Ajusta la ruta a tu pipe
import { InitialsAvatar } from '../initials-avatar/initials-avatar';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [CommonModule, FormatDataPipe, InitialsAvatar],
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css'
})
export class ContactDetail {

  @Input() contact!: Contact;
}