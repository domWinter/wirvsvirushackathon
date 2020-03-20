import { Hospital, BedList, Repository as RepositoryI } from '../types';

export class Repository implements RepositoryI {
    getHospitals(): Promise<Hospital[]> {
        return Promise.reject(new Error("Method not implemented."));
    }
    getHospitalById(id: number): Promise<Hospital> {
        if(id === 1234) {
            return Promise.resolve({
                id:1234,
                name:'Example',
                address:{
                    state: 'Bavaria',
                    city: 'Augsburg',
                    postcode: '86153',
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
            });
        }
        return Promise.reject(new Error('No such hospital'));
    }
    getBedListById(id: number): Promise<BedList> {
        if(id === 27) {
            return Promise.resolve({
                id: 27,
                beds: [
                    { id: 1, ventilator: false, intensive: false, free: true },
                    { id: 2, ventilator: true, intensive: true, free: false }
                ]
            });
        }
        return Promise.reject(new Error('No such bed list'));
    }
}
