import { Injectable, computed, effect, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  readonly items = signal<Contact[]>([
    { name: 'Elena Mora', email: 'elena@code.com', status: 'activo', favorite: true, phone: '0987654321', address: 'Av. Amazonas N24, Quito', birthday: new Date('1990-05-12'), label: 'Trabajo' },
    { name: 'Juan Pérez', email: 'juan.perez@email.com', status: 'activo', favorite: false, phone: '0991234567', address: 'Calle Larga 3-45, Cuenca', birthday: new Date('1985-11-22'), label: 'Amigo' },
    { name: 'Laura Gómez', email: 'laura.gomez@email.com', status: 'inactivo', favorite: true, phone: '0912345678', address: 'Urb. La Joya, Guayaquil', birthday: new Date('1993-02-14'), label: 'Familia' },
    { name: 'Carlos Ramírez', email: 'carlos.ramirez@email.com', status: 'activo', favorite: false, phone: '0956789012', address: 'Barrio Las Palmas, Esmeraldas', birthday: new Date('1988-08-30'), label: 'Trabajo' },
    { name: 'Ana López', email: 'ana.lopez@email.com', status: 'inactivo', favorite: false, phone: '0945678123', address: 'Sector El Batán, Quito', birthday: new Date('1995-12-05'), label: 'Amigo' }
  ]);

  readonly selectedItem = signal<Contact | null>(null);

  readonly totalItems = computed(() => this.items().length);

  readonly totalActiveItems = computed(
    () => this.items().filter((contact) => contact.status === 'activo').length
  );

  constructor() {
    effect(() => {
      console.log('[ItemsService] Lista de contactos:', this.items());
    });
  }

  getItems(): Contact[] {
    return this.items();
  }

  addItem(newContact: Contact): void {
    this.items.update((current) => [...current, newContact]);
  }

  updateItem(updatedContact: Contact): void {
    this.items.update((current) =>
      current.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );

    if (this.selectedItem()?.email === updatedContact.email) {
      this.selectedItem.set(updatedContact);
    }
  }

  removeItem(email: string): void {
    this.items.update((current) =>
      current.filter((contact) => contact.email !== email)
    );

    if (this.selectedItem()?.email === email) {
      this.selectedItem.set(null);
    }
  }

  selectItem(contact: Contact | null): void {
    this.selectedItem.set(contact);
  }
}
