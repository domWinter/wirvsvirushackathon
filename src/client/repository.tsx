import { Hospital, Repository as RepositoryI } from '../types';

export class Repository implements RepositoryI {
    addHospital(): Promise<{}> {
        return Promise.reject(new Error("Method not implemented."));
    }
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
                beds: {
                    iculc: 50,
                    icuhc: 27,
                    ecmo: 10
                }
            });
        }
        return Promise.reject(new Error('No such hospital'));
    }
}
