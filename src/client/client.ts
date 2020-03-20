import { Hospital, BedList, Repository as RepositoryI } from '../types';
import axios from 'axios';

const request = ({path, params, fail}) => {
  return axios.get(path, {params})
  .then((response) => response)
  .catch((error) => fail(error))
};

export class Repository implements RepositoryI {
  getHospitals(): Promise<Hospital[]> {
     return Promise.reject(new Error("Method not implemented."));
  }
  getHospitalById(id: number): Promise<Hospital> {
    return request({
    path: '/hospitals',
    params: {
      'ID': 12345
    },
    fail: (e) => console.log(e)
    })
  }
  getBedListById(id: number): Promise<BedList> {
    return Promise.reject(new Error('No such bed list'));
  }
}
