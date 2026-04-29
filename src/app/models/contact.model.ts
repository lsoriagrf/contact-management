export type ContactStatus = 'activo' | 'inactivo';

export type ContactLabel =
  | 'Trabajo'
  | 'Amigo'
  | 'Familia';

export interface Contact {
  name: string;
  email: string;
  status: ContactStatus;
  favorite: boolean;
  phone: string;
  address: string;
  birthday: Date;
  label: ContactLabel;
}
