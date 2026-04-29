import { Routes } from '@angular/router';
import { ContactList } from './contact-list/contact-list';
import { ContactDetailPage } from './pages/contact-detail-page/contact-detail-page';
import { CreateContactPage } from './pages/create-contact-page/create-contact-page';

export const routes: Routes = [
  { path: '', component: ContactList },
  { path: 'detalle-contacto', component: ContactDetailPage },
  { path: 'crear-contacto', component: CreateContactPage },
  { path: '**', redirectTo: '' }
];
