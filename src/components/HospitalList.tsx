import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
            <Router>
                <ul>
                    {hospitals.map(hospital =>
                        <li><Link to={`/hospitals/${hospital.id}`}><HospitalPreview {...hospital}/></Link></li>
                    )}
                </ul>
            </Router>
        </div>
    );
};

export default HospitalList;
