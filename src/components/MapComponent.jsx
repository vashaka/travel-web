import React from 'react'
import { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import { useDispatch, useSelector } from "react-redux";



class MapComponent extends Component {
  
  render () {
    
    return (
      <div className="googleMap relative flex justify-center h-96">
        <Map 
       google={this.props.google}
       style = {{width:'100%',height:'100%'}}
       zoom = {7}
       initialCenter = {
        {
             lat: 42.2756944,
             lng: 43.7540462
        }
       }
      />
      </div>
      
    );
  }
}

export default GoogleApiWrapper ({
  apiKey:'AIzaSyDkN7jTAsN0FwjBpoyeM4z2p-wUgWxNFZI'
}) (MapComponent)