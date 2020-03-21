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
  icuhc: number,
  ecmo: number,
  timestamp: string
}

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
    location: Location,
};

export interface Repository {
    addHospital(hospital : Partial<Hospital>) : Promise<{}>;
    getBedAvailabilityLatest(id: number) : Promise<BedAvailability>;
    getBedAvailability(id: number) : Promise<BedAvailability[]>;
    getHospitals() : Promise<Hospital[]>;
    getHospitalById(id: number) : Promise<Hospital>;
}
