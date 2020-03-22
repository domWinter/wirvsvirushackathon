import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { FormattedMessage } from "react-intl";

import { Hospital } from '../types';
import HospitalPreview from './HospitalPreview';

type HospitalListProps = {
    hospitals: Hospital[]
}

const HospitalList = ({
    hospitals
} : HospitalListProps) => {
    return (
        <div className="table-responsive">
            <Table responsive striped bordered hover variant="dark" className="table">
                <thead>
                  <tr>
                    <FormattedMessage
                      id="name"
                      description="name"
                      defaultMessage="Name"
                    >
                      {(txt) => <th>{txt}</th>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="address"
                      description="address"
                      defaultMessage="Address"
                    >
                      {(address) =><th>{address}</th>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="phone"
                      description="Phone number"
                      defaultMessage="Phone number"
                    >
                      {(txt) => <th>{txt}</th>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="website"
                      description="website"
                      defaultMessage="Website"
                    >
                      {(websiteTxt) => <th>{websiteTxt}</th>}
                    </FormattedMessage>
                    <FormattedMessage
                      id="information"
                      description="information"
                      defaultMessage="Information"
                    >
                      {(txt) => <th>{txt}</th>}
                    </FormattedMessage>
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
                            <FormattedMessage
                              id="open"
                              description="open"
                              defaultMessage="Open"
                            >
                              {(txt) => <Button size="sm" variant="info">{txt}</Button>}
                            </FormattedMessage>
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
