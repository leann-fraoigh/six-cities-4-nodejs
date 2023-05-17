import { Offer } from '../../types/offer.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Location } from '../../types/location.enum.js';
import { Amenities } from '../../types/amenities.type.js';


export function createOffer(offerData: string): Offer {
  const [name, description, date, location, previewImageUrl, photos, isPremium, isFavourite, rating, type, roomCount, guestCount, rentCost, amenities, author, commentCount, coordinates] = offerData.replace('\n', '').split('\t');

  return {
    name,
    description,
    date: new Date(date),
    location: Location[location as `${Location}`],
    previewImageUrl,
    photos: photos.split(' '),
    isPremium: Boolean(isPremium),
    isFavourite: Boolean(isFavourite),
    rating: Number.parseInt(rating, 10),
    type: OfferType[type as `${OfferType}`],
    roomCount: Number.parseInt(roomCount, 10),
    guestCount: Number.parseInt(guestCount, 10),
    rentCost: Number.parseInt(rentCost, 10),
    amenities: amenities.split(' ') as Amenities,
    author,
    commentCount: Number(commentCount),
    coordinates: {
      latitude: parseFloat(coordinates.split(' ')[0]),
      longitude: parseFloat(coordinates.split(' ')[1])
    }
  };
}
