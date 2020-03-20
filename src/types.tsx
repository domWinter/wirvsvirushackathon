
export type Address = {
    state: string,
    city: string,
    plz: number,
    street: string,
    streetNumber: number
};

export type Location = {
    longitude: number,
    latitude: number
};

export type Bed = {
    id: number,
    ventilator: boolean,
    intensive: boolean,
    free: boolean
}

export type BedList = {
    id: number,
    beds: Bed[]
};

export type Hospital = {
    id: number,
    name: string,
    address: Address,
    phoneNumber: string,
    website: string,
    location: Location,
    bedListId: number
};