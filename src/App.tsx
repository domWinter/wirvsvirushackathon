import React from 'react';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

type AppProps = {
  className?: string
}

const App = ({ className } : AppProps) => (
  <div className={className}>
    Hello world
  </div>
);


const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
