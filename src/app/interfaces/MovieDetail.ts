import { PersonList } from './RawMovie';

export interface MovieDetail {
  description: string;
  duration: string;
  category: string;
  trailer: string;
  personList: PersonList[];
}
