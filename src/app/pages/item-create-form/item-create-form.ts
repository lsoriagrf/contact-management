import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, delay, of } from 'rxjs';
import { PageHeader } from '../../components/page-header/page-header';
import { Contact, ContactLabel, ContactStatus } from '../../models/contact.model';
import { ContactsService } from '../../services/contacts.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item-create-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PageHeader],
  templateUrl: './item-create-form.html',
  styleUrl: './item-create-form.css'
})
export class ItemCreateForm {
  private readonly fb = inject(FormBuilder);
  private readonly itemsService = inject(ItemsService);
  private readonly contactsService = inject(ContactsService);
  private readonly router = inject(Router);

  readonly statusOptions: ContactStatus[] = ['activo', 'inactivo'];
  readonly labelOptions: ContactLabel[] = ['Trabajo', 'Amigo', 'Familia'];

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(10)], [this.nameExistsValidator()]],
    email: [
      '',
      [Validators.required, Validators.email],
      [this.emailExistsValidator()]
    ],
    phone: ['', [Validators.pattern(/^\d{10}$/)]],
    address: [''],
    birthday: [''],
    status: ['activo' as ContactStatus],
    label: ['Amigo' as ContactLabel],
    favorite: [false]
  });

  get f() {
    return this.form.controls;
  }

  private nameExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) return of(null);
      const name = control.value.trim().toLowerCase();
      const exists = this.contactsService.getContacts().some(
        (c) => c.name.toLowerCase() === name
      );
      return of(exists ? { nameExists: true } : null).pipe(delay(400));
    };
  }

  private emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) return of(null);
      const email = control.value.trim().toLowerCase();
      const exists = this.contactsService.getContacts().some(
        (c) => c.email.toLowerCase() === email
      );
      return of(exists ? { emailExists: true } : null).pipe(delay(400));
    };
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const v = this.form.value;

    const newContact: Contact = {
      name: v.name!.trim(),
      email: v.email!.trim(),
      phone: v.phone ?? '',
      address: v.address ?? '',
      birthday: v.birthday ? new Date(v.birthday) : new Date(),
      status: (v.status ?? 'activo') as ContactStatus,
      label: (v.label ?? 'Amigo') as ContactLabel,
      favorite: v.favorite ?? false
    };

    this.itemsService.addItem(newContact);
    this.contactsService.addContact(newContact);

    this.router.navigateByUrl('/');
  }
}
