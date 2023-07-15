import { ContactFormInterface } from 'interfaces/contact-form';
import { ProjectInterface } from 'interfaces/project';
import { SkillInterface } from 'interfaces/skill';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  contact_form?: ContactFormInterface[];
  project?: ProjectInterface[];
  skill?: SkillInterface[];
  user?: UserInterface;
  _count?: {
    contact_form?: number;
    project?: number;
    skill?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
