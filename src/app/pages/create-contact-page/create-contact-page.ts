import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageHeader } from '../../components/page-header/page-header';
import { Contact, ContactLabel, ContactStatus } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-create-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeader],
  templateUrl: './create-contact-page.html',
  styleUrl: './create-contact-page.css'
})
export class CreateContactPage {
  private readonly contactsService = inject(ContactsService);
  private readonly router = inject(Router);

  readonly statusOptions: ContactStatus[] = ['activo', 'inactivo'];
  readonly labelOptions: ContactLabel[] = ['Trabajo', 'Amigo', 'Familia'];

  newContact: Contact = {
    name: '',
    email: '',
    status: 'activo',
    favorite: false,
    phone: '',
    address: '',
    birthday: new Date(),
    label: 'Amigo'
  };

  birthdayInput = '';

  saveContact(): void {
    const trimmedName = this.newContact.name.trim();
    const trimmedEmail = this.newContact.email.trim();

    if (!trimmedName || !trimmedEmail) {
      return;
    }

    const birthday = this.birthdayInput ? new Date(this.birthdayInput) : new Date();

    this.contactsService.addContact({
      ...this.newContact,
      name: trimmedName,
      email: trimmedEmail,
      birthday
    });

    this.router.navigateByUrl('/');
  }
}
