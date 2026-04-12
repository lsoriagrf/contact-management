import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactCard } from '../contact-card/contact-card';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactCard],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {

  contacts = [
    { nombre: 'lisbeth soria', email: 'lisbeth@gmail.com', estado: 'activo', favorito: false },
    { nombre: 'Carlos Ruiz', email: 'carlos@mail.com', estado: 'inactivo', favorito: true },
    { nombre: 'Ana Martínez', email: 'ana.mtz@web.com', estado: 'activo', favorito: false },
    { nombre: 'Roberto Gómez', email: 'roberto@tech.com', estado: 'inactivo', favorito: false },
    { nombre: 'Elena Mora', email: 'elena@code.com', estado: 'activo', favorito: true }
  ];

  constructor() { }
}