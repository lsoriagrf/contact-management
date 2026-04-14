import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDataPipe } from '../pipes/format-data-pipe';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, FormatDataPipe],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css'
})
export class ContactCard {
  // Este decorador permite que el padre pase un objeto "contacto"
  @Input() contacto: any; 

  toggleEstado() {
    this.contacto.estado = this.contacto.estado === 'activo' ? 'inactivo' : 'activo';
  }

  toggleFavorito() {
    this.contacto.favorito = !this.contacto.favorito;
  }
}
