import { Injectable, computed, effect, signal } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly contacts = signal<Contact[]>([
    { name: 'ELENA mora', email: '  ELENA @ code . COM  ', status: 'activo', favorite: true, phone: '0987654321', address: 'Av. Amazonas N24, Quito', birthday: new Date('1990-05-12'), label: 'Trabajo' },
    { name: 'juan PÉREZ', email: 'JUAN.perez @ EMAIL .com', status: 'activo', favorite: false, phone: '0991234567', address: 'Calle Larga 3-45, Cuenca', birthday: new Date('1985-11-22'), label: 'Amigo' },
    { name: 'laura GÓMEZ', email: ' LAURA.gomez@email.com ', status: 'inactivo', favorite: true, phone: '0912345678', address: 'Urb. La Joya, Guayaquil', birthday: new Date('1993-02-14'), label: 'Familia' },
    { name: 'carlos RAMÍREZ', email: 'carlos . ramirez @ EMAIL . com', status: 'activo', favorite: false, phone: '0956789012', address: 'Barrio Las Palmas, Esmeraldas', birthday: new Date('1988-08-30'), label: 'Trabajo' },
    { name: 'ANA lópez', email: '  ana.lopez @ EMAIL . COM', status: 'inactivo', favorite: false, phone: '0945678123', address: 'Sector El Batán, Quito', birthday: new Date('1995-12-05'), label: 'Amigo' },
    { name: 'ROBERTO castro', email: ' ROB @ CAstro . org ', status: 'inactivo', favorite: true, phone: '0934567890', address: 'Av. Cevallos, Ambato', birthday: new Date('1982-03-15'), label: 'Trabajo' },
    { name: 'marta Vizuete', email: 'MARTA . VIZUETE @ gmail . COM', status: 'inactivo', favorite: false, phone: '0923456781', address: 'Calle Bolívar, Loja', birthday: new Date('1991-07-19'), label: 'Familia' },
    { name: 'diego ARMANDO', email: '  dieguito @ FUTBOL . com', status: 'activo', favorite: true, phone: '0978901234', address: 'Barrio Centenario, Guayaquil', birthday: new Date('1980-10-30'), label: 'Amigo' },
    { name: 'SARA lizarazo', email: 'sara_LIZA @ empresa . net ', status: 'inactivo', favorite: false, phone: '0967890123', address: 'Conjunto El Condado, Quito', birthday: new Date('1994-01-25'), label: 'Trabajo' },
    { name: 'FERNANDO solis', email: ' fercito @ SOLIS . CO ', status: 'activo', favorite: false, phone: '0910928374', address: 'Sector San Sebastián, Cuenca', birthday: new Date('1987-06-14'), label: 'Amigo' },
    { name: 'PATRICIA jara', email: ' paty . jara @ HotMail . Com ', status: 'activo', favorite: true, phone: '0990011223', address: 'Vía a la Costa, Guayaquil', birthday: new Date('1989-09-09'), label: 'Familia' },
    { name: 'ESTEBAN quito', email: '  esteban_quito @ PROYECTO . ec ', status: 'inactivo', favorite: false, phone: '0988776655', address: 'Calle de los Arboles, Manta', birthday: new Date('1992-04-01'), label: 'Trabajo' },
    { name: 'JIMENA fuentes', email: ' jime . FUENTES @ cloud . io ', status: 'activo', favorite: false, phone: '0977665544', address: 'Urb. Santa Cecilia, Quito', birthday: new Date('1996-08-21'), label: 'Amigo' },
    { name: 'hugo SÁNCHEZ', email: ' HUGO @ goles . mx ', status: 'activo', favorite: true, phone: '0922334455', address: 'Av. 10 de Agosto, Ibarra', birthday: new Date('1984-02-11'), label: 'Trabajo' },
    { name: 'VALERIA duque', email: '  vale . DUQUE @ academia . edu ', status: 'inactivo', favorite: false, phone: '0911223344', address: 'Paseo Shopping, Machala', birthday: new Date('1997-11-15'), label: 'Familia' }
  ]);

  readonly selectedContact = signal<Contact | null>(null);
  readonly totalContacts = computed(() => this.contacts().length);
  readonly totalActiveContacts = computed(
    () => this.contacts().filter((contact) => contact.status === 'activo').length
  );

  constructor() {
    effect(() => {
      console.log('[ContactsService] Lista actual:', this.contacts());
    });
  }

  getContacts(): Contact[] {
    return this.contacts();
  }

  setContacts(contacts: Contact[]): void {
    this.contacts.set(contacts);
  }

  addContact(newContact: Contact): void {
    this.contacts.update((currentContacts) => [...currentContacts, newContact]);
  }

  updateContact(updatedContact: Contact): void {
    this.contacts.update((currentContacts) =>
      currentContacts.map((contact) =>
        contact.email === updatedContact.email ? updatedContact : contact
      )
    );

    if (this.selectedContact()?.email === updatedContact.email) {
      this.selectedContact.set(updatedContact);
    }
  }

  selectContact(contact: Contact | null): void {
    this.selectedContact.set(contact);
  }
}
