import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactCard } from '../contact-card/contact-card';
import { Sort } from '../pipes/sort-pipe';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactCard, Sort],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList {

  contacts = [
    { nombre: 'ELENA mora', email: '  ELENA @ code . COM  ', estado: 'activo', favorito: true },
    { nombre: 'juan PÉREZ', email: 'JUAN.perez @ EMAIL .com', estado: 'activo', favorito: false },
    { nombre: 'laura GÓMEZ', email: ' LAURA.gomez@email.com ', estado: 'inactivo', favorito: true },
    { nombre: 'carlos RAMÍREZ', email: 'carlos . ramirez @ EMAIL . com', estado: 'activo', favorito: false },
    { nombre: 'ANA lópez', email: '  ana.lopez @ EMAIL . COM', estado: 'inactivo', favorito: false },
    { nombre: 'ROBERTO castro', email: ' ROB @ CAstro . org ', estado: 'activo', favorito: true },
    { nombre: 'marta Vizuete', email: 'MARTA . VIZUETE @ gmail . COM', estado: 'inactivo', favorito: false },
    { nombre: 'diego ARMANDO', email: '  dieguito @ FUTBOL . com', estado: 'activo', favorito: true },
    { nombre: 'SARA lizarazo', email: 'sara_LIZA @ empresa . net ', estado: 'inactivo', favorito: false },
    { nombre: 'FERNANDO solis', email: ' fercito @ SOLIS . CO ', estado: 'activo', favorito: false },
    { nombre: 'PATRICIA jara', email: ' paty . jara @ HotMail . Com ', estado: 'activo', favorito: true },
    { nombre: 'ESTEBAN quito', email: '  esteban_quito @ PROYECTO . ec ', estado: 'inactivo', favorito: false },
    { nombre: 'JIMENA fuentes', email: ' jime . FUENTES @ cloud . io ', estado: 'activo', favorito: false },
    { nombre: 'hugo SÁNCHEZ', email: ' HUGO @ goles . mx ', estado: 'activo', favorito: true },
    { nombre: 'VALERIA duque', email: '  vale . DUQUE @ academia . edu ', estado: 'inactivo', favorito: false }
  ];

  get totalActivos(): number {
    return this.contacts.filter(c => c.estado === 'activo').length;
  }
  
  constructor() { }
}