import { Location as Name} from './location.enum';

export type LocationName = keyof typeof Name;

export type Location = {
  title: LocationName;
  latitude: number;
  longitude: number;
  zoom: number;
};
