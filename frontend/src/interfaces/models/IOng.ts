import { IIncidents } from './IIncidents';
export interface IOng {
  name?: string;
  email?: string;
  whatsapp?: string;
  city?: string;
  uf?: string;
  token?: string;
  incidents: IIncidents[];
}
