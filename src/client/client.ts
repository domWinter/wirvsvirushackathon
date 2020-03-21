import { Hospital, Repository as RepositoryI } from '../types';
import axios from 'axios';

type requestParams = {
  path: string,
  params?: object
}

const request = ({path, params}: requestParams) => {
  return axios.get(path, {params})
  .then((response) => response.data.data)
  .catch((error) => { throw new Error(error) })
};

export class Repository implements RepositoryI {
  getHospitals(): Promise<Hospital[]> {
    return request({
      path: '/hospitals'
    });
  }
  getHospitalById(id: number): Promise<Hospital> {
    return request({
      path: '/hospital',
      params: {
        'id': 1
      }
    });
  }
}
