import React from 'react';

import logo from './logo.svg';
import { App, AppLogo, AppHeader, AppLink} from './style';
import Sample from '../../components/Sample';

export default function Home() {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
        <Sample />
      </AppHeader>
    </App>
  )
}