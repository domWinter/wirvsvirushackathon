import React from 'react';
import { BedAvailability as BedAvailabilityProps } from '../types';
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

const BedAvailability = ({
  iculc,
  icuhc,
  ecmo,
  timestamp
} : BedAvailabilityProps) => (
  <>
    <FormattedMessage
      id="availableBeds"
      description="available beds"
      defaultMessage="Available Beds"
    >
      {(availableBeds) =>
        <h3>{availableBeds} (<FormattedDate value={timestamp}/> <FormattedTime value={timestamp}/>):</h3>
      }
    </FormattedMessage>
    <FormattedMessage
      id="iculc"
      defaultMessage="ICULC"
    >
      {(txt) =>
        <p>{txt}: {iculc}</p>
      }
    </FormattedMessage>
    <FormattedMessage
      id="icuhc"
      defaultMessage="ICUHC"
    >
      {(txt) =>
        <p>{txt}: {iculc}</p>
      }
    </FormattedMessage>
    <FormattedMessage
      id="ecmo"
      defaultMessage="ECMO"
    >
      {(txt) =>
        <p>{txt}: {ecmo}</p>
      }
    </FormattedMessage>
  </>
);

export default BedAvailability;
