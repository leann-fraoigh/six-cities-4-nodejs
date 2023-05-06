import { Amenities } from './amenities.type';
import { Location as LocationName } from './location.enum';
import { Location } from './location.type';
import { OfferType } from './offer-type.enum';

export type Offer = {
  name: string,
  description: string,
  date: Date,
  location: LocationName,
  previewImageUrl: string,
  photos: string[],
  isPremium: boolean,
  isFavourite: boolean,
  rating: number,
  type: OfferType,
  roomCount: number;
  guestCount: number;
  rentCost: number;
  amenities: Amenities;
  author: string, // ???
  commentCount: number,
  coordinates: {latitude: Location['latitude'], longitude: Location['longitude']},
}

export type Offers = Offer[];

// const offer: Offer = {
//   name: 'asdas',
//   description: 'asdas',
//   date: new Date(),
//   location: LocationName.Amsterdam,
//   previewImageUrl: 'asdas',
//   photos: ['asdas', 'asdas'],
//   isPremium: true,
//   isFavourite: false,
//   rating: 12,
//   type: OfferType.Room,
//   roomCount: 1212,
//   guestCount: 12,
//   rentCost: 12,
//   amenities:[Amenity.Breakfast, Amenity.BabySeat],
//   author: 'asdas', // ???
//   commentCount: 12,
//   coordinates: {latitude: 132, longitude: 12312},
// };

// let a = offer;

