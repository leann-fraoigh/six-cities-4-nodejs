enum Amenity {
  Breakfast = 'Breakfast',
  AirConditioning = 'AirConditioning',
  LaptopFriendlyWorkspace = 'LaptopFriendlyWorkspace',
  BabySeat = 'BabySeat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge',
}

export type Amenities = Array<keyof typeof Amenity>;
