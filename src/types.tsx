export type Address = {
    state: string,
    city: string,
    postcode: string,
    street: string,
    streetNumber: number
};

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
    beds: {
        iculc: number,
        icuhc: number,
        ecmo: number
    }
};

export interface Repository {
    addHospital(hospital : Partial<Hospital>) : Promise<{}>;
    getHospitals() : Promise<Hospital[]>;
    getHospitalById(id: number) : Promise<Hospital>;
}
