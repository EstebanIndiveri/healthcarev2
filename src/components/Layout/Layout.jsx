

import React,{useContext, Fragment} from 'react';
import {Global,css } from '@emotion/core';
import {useTheme} from 'emotion-theming';
import Context from '../../store/context';
import Heading from '../Heading/Heading';
import {Helmet} from 'react-helmet';


const Layout=({children})=>{
  const{state}=useContext(Context);
  const theme=useTheme();

  return(
    <Fragment>
      <Global 
       styles={css`
       *{
           /* width */
           ::-webkit-scrollbar {
             width: 0px;
             border-radius:10px;
             transition:300ms !important;
           }

           /* Track */
           ::-webkit-scrollbar-track {
             background: transparent; 
               border-radius:10px;
               transition:300ms !important;

           }
           
           /* Handle */
           ::-webkit-scrollbar-thumb {
             background: #af97a2;
               border-radius:10px;
               transition:300ms !important;

           }

           /* Handle on hover */
           ::-webkit-scrollbar-thumb:hover {
             background: #a08a94;
             transition:300ms !important;
           }
         scroll-behavior: smooth;

         box-sizing:border-box;
         margin:0;
         padding:0;
         font-family:'Montserrat',sans-serif !important;
         /* transition: ${state.isDark?`background-color 0s ease-in-out`:theme.transition.transition}; */
         /* transition: color ${state.isDark?"0.2s ease-in-out":"0.2s ease-in-out"} !important; */
       }
       h1,h2,h3,h4,h5,h6{
        font-family: 'Fira Sans', sans-serif !important;
        
      }
       body{
         background-color:${state.isDark?
         theme.dark.background:
         theme.light.background};
         color:${state.isDark?theme.dark.font:theme.light.font};
         
         /* transition:color .1s ease-in-out !important; */
           }
         `}
          />
          <Helmet>
              <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
              />  
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:ital,wght@0,400;0,600;1,900&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet"></link>
            
            </Helmet>
          
      <Heading/>
          {children}
 
    </Fragment>
  )
}
export default Layout;