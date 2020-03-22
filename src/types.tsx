export type Address = {
    state: string,
    city: string,
    postcode: string,
    street: string,
    streetNumber: number
};

export type BedAvailability = {
  id: number,
  hospitalID: number,
  iculc: number,
  iculcMax: number,
  icuhc: number,
  icuhcMax: number,
  ecmo: number,
  ecmoMax: number,
  timestamp: string
}

export type HeatMapEntry = Location & {
  iculcIntensity: number,
  icuhcIntensity: number,
  ecmoIntensity: number
}

export type HeatMap = HeatMapEntry[];

export type MapDataEntry =
  Exclude<Hospital, "location" | "address"> & Location & Address & BedAvailability;

export type MapData = MapDataEntry[];

export type Marker = Location & Extract<Hospital, "name" | "timestamp" | "id"> & Exclude<BedAvailability, "id" | "hospitalID">

export type Location = {
    longitude: number,
    latitude: number
};

export type Hospital = {
    id: number,
    name: string,
    address: Address,
    phoneNumber: string,
    website: string,
    location: Location
};

export interface Repository {
    addHospital(hospital : Partial<Hospital>) : Promise<{}>;
    getBedAvailabilityLatest(id: number) : Promise<BedAvailability>;
    getBedAvailability(id: number) : Promise<BedAvailability[]>;
    getHospitals() : Promise<Hospital[]>;
    getHospitalById(id: number) : Promise<Hospital>;
    getMapData() : Promise<MapData>;
}
