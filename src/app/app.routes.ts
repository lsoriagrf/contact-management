import { Routes } from '@angular/router';
import { ContactList } from './contact-list/contact-list';
import { ContactDetailPage } from './pages/contact-detail-page/contact-detail-page';
import { ItemCreateForm } from './pages/item-create-form/item-create-form';
import { ItemEditForm } from './pages/item-edit-form/item-edit-form';

export const routes: Routes = [
  { path: '', component: ContactList },
  { path: 'detalle-contacto', component: ContactDetailPage },
  { path: 'crear-contacto', component: ItemCreateForm },
  { path: 'editar-contacto', component: ItemEditForm },
  { path: '**', redirectTo: '' }
];
