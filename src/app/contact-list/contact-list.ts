import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCard } from '../contact-card/contact-card';
import { Sort } from '../pipes/sort-pipe';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactCard, Sort],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {
  private readonly router = inject(Router);
  private readonly contactsService = inject(ContactsService);
  private readonly itemsService = inject(ItemsService);

  readonly contactsFromService = this.contactsService.contacts;
  readonly totalContacts = this.contactsService.totalContacts;
  readonly totalActiveContacts = this.contactsService.totalActiveContacts;

  handleSelectContact(contact: Contact): void {
    this.contactsService.selectContact(contact);
    this.router.navigate(['/detalle-contacto'], { state: { contact } });
  }

  handleEditContact(contact: Contact): void {
    this.itemsService.selectItem(contact);
    this.router.navigate(['/editar-contacto']);
  }

  addElement(): void {
    const nextIndex = this.totalContacts() + 1;

    this.contactsService.addContact({
      name: `Nuevo Contacto ${nextIndex}`,
      email: `nuevo.contacto.${nextIndex}@demo.com`,
      status: 'activo',
      favorite: false,
      phone: '0000000000',
      address: 'Dirección pendiente',
      birthday: new Date(),
      label: 'Amigo'
    });
  }

  goToCreateContact(): void {
    this.router.navigate(['/crear-contacto']);
  }
}