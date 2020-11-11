import React, { Fragment } from 'react';
import './index.scss';
import Layout from './components/Layout';
import { ThemeProvider } from 'emotion-theming';
import DarkStateProvider from './store/darkStateProvider';
import {theme} from './theme/theme';
import HomeScreen from './components/HomeScreen';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {


  return ( 
  <Fragment>
    <ParallaxProvider>
      <DarkStateProvider>
          <ThemeProvider theme={theme}>
            <Layout/>
            <HomeScreen/>
        </ThemeProvider>
      </DarkStateProvider>
    </ParallaxProvider>
  </Fragment>
  

  );
}

export default App;
