import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactDetail } from '../../components/contact-detail/contact-detail';
import { PageHeader } from '../../components/page-header/page-header';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-detail-page',
  standalone: true,
  imports: [CommonModule, ContactDetail, PageHeader],
  templateUrl: './contact-detail-page.html',
  styleUrl: './contact-detail-page.css'
})
export class ContactDetailPage {
  private readonly contactsService = inject(ContactsService);
  readonly selectedContact = this.contactsService.selectedContact;
}
