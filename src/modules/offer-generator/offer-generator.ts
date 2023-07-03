import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems, shuffleArray, generateRandomBoolean } from '../../core/helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOM = 1;
const MAX_ROOM = 8;

const MIN_GUEST = 1;
const MAX_GUEST = 10;

const MIN_COMMENT = 1;
const MAX_COMMENT = 100;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const name = getRandomItem<string>(this.mockData.names);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = getRandomItem<string>(this.mockData.dates);
    const location = getRandomItem<string>(this.mockData.locations);
    const previewImageUrl = getRandomItem<string>(this.mockData.previewImageUrls);
    const photos = shuffleArray<string>(this.mockData.photos).join(' ');
    const isPremium = generateRandomBoolean();
    const isFavourite = generateRandomBoolean();
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const roomCount = generateRandomValue(MIN_ROOM, MAX_ROOM).toString();
    const guestCount = generateRandomValue(MIN_GUEST, MAX_GUEST).toString();
    const rentCost = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const amenities = getRandomItems<string>(this.mockData.amenities).join(' ');
    const author = getRandomItem<string>(this.mockData.authors);
    const comments = generateRandomValue(MIN_COMMENT, MAX_COMMENT).toString();
    const latitude = getRandomItem<string>(this.mockData.latitudes);
    const longitude = getRandomItem<string>(this.mockData.longitudes);

    return [
      name, description, date, location, previewImageUrl, photos, isPremium, isFavourite, rating, type, roomCount, guestCount, rentCost, amenities, author, comments, latitude, longitude
    ].join('\t');
  }
}
