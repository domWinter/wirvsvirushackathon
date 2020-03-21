import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { Hospital } from '../types';
import HospitalPreview from './HospitalPreview';

type HospitalListProps = {
    hospitals: Hospital[]
}

const HospitalList = ({
    hospitals
} : HospitalListProps) => {
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Adresse</th>
                        <th>Telefon</th>
                        <th>Website</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                {hospitals.map((hospital, i) =>
                    <tr key={i}>
                        <HospitalPreview {...hospital}/>
                        <td><Link to={{
                                pathname: `/hospital/${hospital.id}`,
                                state: hospital
                            }}>
                            <Button size="sm" variant="info">Info</Button>{' '}
                            </Link>
                        </td>
                    </tr>

                    
                )}
                </tbody>
            </Table>
        </div>
    );
};

export default HospitalList;
