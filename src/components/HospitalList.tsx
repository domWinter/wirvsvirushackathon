import React from 'react';
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
                {hospitals.map(hospital => <li><HospitalPreview {...hospital}/></li>)}
            </ul>
        </div>
    );
};