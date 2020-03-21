import React from 'react';
import { Link } from 'react-router-dom';

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
            <ul>
                {hospitals.map(hospital =>
                    <li key={hospital.id}><Link to={{
                        pathname: `/hospital/${hospital.id}`,
                        state: hospital
                    }}><HospitalPreview {...hospital}/></Link></li>
                )}
            </ul>
        </div>
    );
};

export default HospitalList;
