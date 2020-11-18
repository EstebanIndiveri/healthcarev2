import React,{useState} from 'react'
import ReactMapGL,{Marker} from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

import './MapBox.scss';

const MapBox = () => {

    const [viewport, setViewport] = useState({
        width: '200px',
        height: '200px',
        // latitude: -31.42327117919922,
        latitude: -31.423151419299444,
        longitude: -64.18288905143712,
        // longitude: -64.18257141113281,
        zoom: 14,
      });
      const [selected,setSelected]=useState(null);
    
    return ( 
      // ya esta funcionando
    // <ReactMapGL mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 
    // mapStyle='mapbox://styles/tefaa411/ckcznbj0k07l91imtqj94qmzm'
    //   {...viewport}
    //   onViewportChange={nextViewport => setViewport(nextViewport)}
    // >
    //     <Marker  latitude={-31.42327117919922} longitude={-31.42327117919922} offsetLeft={0} offsetTop={0} captureClick={true}>
           
    //             <div style={{height:'20px',width:'20px'}}><h1>You are here</h1></div>
         
    //     </Marker>
       
    // </ReactMapGL>
    <div style={{width:'200px !important', display:'block'}}>
    <ReactMapGL latitude={37.78} longitude={-122.41} zoom={8} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} 
    mapStyle='mapbox://styles/tefaa411/ckcznbj0k07l91imtqj94qmzm'
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >
    <Marker latitude={-31.423151419299444} longitude={-64.18288905143712} offsetLeft={-20} offsetTop={-10}>
      <div><FontAwesomeIcon icon={faMapMarkerAlt} color="#d88564" style={{fontSize:"42px"}} /></div>
    </Marker>
  </ReactMapGL>
  </div>

     );
}
 
export default MapBox;