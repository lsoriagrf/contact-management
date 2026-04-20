import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initials-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './initials-avatar.html',
  styleUrl: './initials-avatar.css',
})
export class InitialsAvatar {
  @Input() name: string | null | undefined;
  @Input() size = 44; // px

  get initials(): string {
    const name = (this.name ?? '').trim();
    if (!name) return 'NN';

    const words = name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2);

    if (words.length === 0) return 'NN';
    return words.map((w) => w.charAt(0).toUpperCase()).join('');
  }
}

