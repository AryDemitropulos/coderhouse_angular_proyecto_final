export interface RawMovie {
  name: string;
  id: string;
  rating: string;
  distributor: string;
  description: string;
  duration: string;
  category: string;
  URLPoster: string;
  URLTrailerYoutube: string;
  personList: PersonList[];
}

interface PersonList {
  Type: string;
  Name: string;
}
