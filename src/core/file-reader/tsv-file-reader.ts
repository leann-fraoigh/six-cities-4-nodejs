import { readFileSync } from 'node:fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../types/offer.type.js';
// TODO: что тут с расширенями файлов??
import { Location } from '../../types/location.enum.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { Amenities } from '../../types/amenities.type.js';


export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}


  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8'});
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([name, description, date, location, previewImageUrl, photos, isPremium, isFavourite, rating, type, roomCount, guestCount, rentCost, amenities, author, commentCount, coordinates ]) => ({
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
          latitude: Number.parseInt(coordinates.split(' ')[0], 10),
          longitude: Number.parseInt(coordinates.split(' ')[1], 10)
        }
      })
      );
  }
}
