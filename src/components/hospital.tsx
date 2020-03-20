import React from 'react';
import { Hospital } from '../types';

export default class HospitalComponent extends React.Component<Hospital, {}> {
    render() {
        return (
            <div>
                <h2>{ this.props.name }</h2>
                <h3>Address:</h3>
                <p>{ this.props.address.street } { this.props.address.streetNumber }<br/>
                { this.props.address.plz }, { this.props.address.city }<br/>
                { this.props.address.state }</p>
                <h3>Contact:</h3>
                <p>Website: { this.props.website }<br/>
                Phone Number: { this.props.phoneNumber }</p>
            </div>
        );
    }
}