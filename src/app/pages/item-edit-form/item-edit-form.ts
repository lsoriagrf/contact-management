import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageHeader } from '../../components/page-header/page-header';
import { Contact, ContactLabel, ContactStatus } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-edit-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeader],
  templateUrl: './item-edit-form.html',
  styleUrl: './item-edit-form.css'
})
export class ItemEditForm {
  private readonly itemsService = inject(ItemsService);
  private readonly contactsService = inject(ContactsService);
  private readonly router = inject(Router);

  readonly selectedItem = this.itemsService.selectedItem;

  readonly statusOptions: ContactStatus[] = ['activo', 'inactivo'];
  readonly labelOptions: ContactLabel[] = ['Trabajo', 'Amigo', 'Familia'];

  private originalEmail = '';

  editContact: Contact = {
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

  constructor() {
    const item = this.selectedItem();
    if (item) {
      this.originalEmail = item.email;
      this.editContact = { ...item };
      this.birthdayInput = item.birthday
        ? new Date(item.birthday).toISOString().split('T')[0]
        : '';
    }
  }

  saveChanges(): void {
    const updated: Contact = {
      ...this.editContact,
      name: this.editContact.name.trim(),
      email: this.editContact.email.trim(),
      birthday: this.birthdayInput ? new Date(this.birthdayInput) : this.editContact.birthday
    };

    this.itemsService.updateItem(updated);

    const updatedList = this.contactsService.getContacts().map((c) =>
      c.email === this.originalEmail ? updated : c
    );
    this.contactsService.setContacts(updatedList);

    this.router.navigateByUrl('/');
  }
}
