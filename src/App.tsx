import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HospitalComponent from './components/hospital';
import { Repository, MockRepository } from './repository';
import { Hospital } from './types';


type Todo = {
  id: number,
  title: string,
  done?: boolean
}

class App extends React.Component {
  render() {
    const repository : Repository = new MockRepository();
    const exampleHospital : Hospital = repository.getHospitalById(1234);

    return (
      <div className="App">
        <HospitalComponent {...exampleHospital} />
      </div>
    )
  }
}

export default App;
