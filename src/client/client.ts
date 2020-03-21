import { Hospital, Repository as RepositoryI } from '../types';
import axios from 'axios';

type getParams = {
  path: string,
  params?: object
}

type postParams = {
  path: string,
  data?: object
}

const get = ({path, params}: getParams) => {
  return axios.get(path, {params})
  .then((response) => response.data.data)
  .catch((error) => { throw new Error(error) })
};

const post = ({path, data}: postParams) => {
  return axios.post(path, {data})
  .then((response) => response)
  .catch((error) => { throw new Error(error) })
};

export class Client implements RepositoryI {
  addHospital(hospital : Partial<Hospital>) : Promise<{}> {
    return post({
      path: '/hospital/add',
      data: hospital
    });
  }

  getHospitals(): Promise<Hospital[]> {
    return get({
      path: '/hospitals'
    });
  }

  getHospitalById(id: number): Promise<Hospital> {
    return get({
      path: '/hospital',
      params: {
        'id': 1
      }
    });
  }
}

export default Client
