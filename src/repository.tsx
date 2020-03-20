import { Hospital, BedList } from './types';

export interface Repository {
    getHospitals() : Hospital[];
    getHospitalById(id: number) : Hospital;
    getBedListById(id: number) : BedList;
}

export class MockRepository implements Repository {
    getHospitals(): Hospital[] {
        throw new Error("Method not implemented.");
    }
    getHospitalById(id: number): Hospital {
        if(id === 1234) {
            return {
                id:1234,
                name:'Example',
                address:{
                    state: 'Bavaria',
                    city: 'Augsburg',
                    plz: 86153,
                    street: 'Friedrich-List-Str.',
                    streetNumber: 2
                },
                phoneNumber:'01531931531',
                website:'example.de',
                location:{
                    longitude: 15.1234,
                    latitude: 27.2713
                },
                bedListId:1234
            };
        }
        throw new Error('No such hospital');
    }
    getBedListById(id: number): BedList {
        if(id === 27) {
            return {
                id: 27,
                beds: [
                    { id: 1, ventilator: false, intensive: false, free: true },
                    { id: 2, ventilator: true, intensive: true, free: false }
                ]
            }
        }
        throw new Error('No such bed list');
    }

}
