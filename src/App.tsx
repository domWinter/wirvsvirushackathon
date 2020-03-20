import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";


type AppProps = {
  className?: string
}

const App = ({ className } : AppProps) => (
  <FormattedMessage
    id="app.greeting"
    description="Greeting to welcome the user to the app"
    defaultMessage="Hello, {name}!"
    values={{
      name: 'Alex',
    }}>
    {(txt) =>
      <p className={className}>{txt}</p>
    }
  </FormattedMessage>
);


const StyledApp = styled(App)`
  text-align: center;
`;

export default StyledApp;
