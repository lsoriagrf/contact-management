import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css'
})
export class PageHeader {
  private readonly router = inject(Router);

  @Input() title = '';

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
