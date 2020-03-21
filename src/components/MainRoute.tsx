import React from 'react';

import HospitalsRoute from './HospitalsRoute';
import MapRoute from './MapRoute';

export const MainRoute = () => {
  return (
    <>
      <MapRoute />
      <HospitalsRoute />
    </>
  );
};

export default MainRoute;
