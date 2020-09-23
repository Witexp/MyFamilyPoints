import React, { Component } from 'react'
import { Button, Text, View, PermissionsAndroid, SafeAreaView, } from 'react-native'
import Points from './Points'
import { styles } from '../../styles'
import Geolocation from 'react-native-geolocation-service'; 
//import Geocoder from 'react-native-geocoding';
import { Geocoder } from 'react-native-yamap';


// if (hasLocationPermission) { 
//     Geolocation.getCurrentPosition((position) => { 
//         console.log(position); 
//     }, (error) => { 
//         // См. таблицы кодов ошибок выше.
//         console.log(error.code, error.message); 
//     }, { 
//         enableHighAccuracy: true, 
//         timeout: 10000, 
//         maximumAge: 10000 
//     }); 
// }




 
const point = async (geo) => { 
  Geocoder.init('b1c58f81-6468-406f-9e4a-99fb92ff29ef');
  
  console.log(geo)
  const adress = await Geocoder.reverseGeocode(geo);


  console.log(adress.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData) 
}

const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log("You can use Location");

        
        
        
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };





class Home extends Component {
    state={
        altitude: 119,
        latitude: 56,
        marker: {}
    }


    componentDidMount() {
    }

  
    render(props) {

      const {marker} = this.state

      const  getLocation = () => {
        if(requestLocationPermission) 
        {
          Geolocation.getCurrentPosition((position) => { 
          this.setState({altitude: position.coords.altitude}) 
          this.setState({latitude: position.coords.latitude})  
          marker.num1 = +this.state.altitude
          marker.num2 = +this.state.altitude
          console.log('marker',marker);
          console.log(position); 
      }, (error) => { 
          // См. таблицы кодов ошибок выше.
          console.log(error.code, error.message); 
      }, { 
          enableHighAccuracy: true, 
          timeout: 10000, 
          maximumAge: 10000 
      }); 
        } else {
          this.setState({coord: 'Bad'})
        }
      }
        return (
            <View style={styles.center}>
                <Text style={styles.h1}> Home Screen </Text>
                <Text> Широта {Math.round(this.state.alyitube)}</Text>
                <Text> Долгота {Math.round(this.state.latitube)}</Text>
                <Button title="Go to Ponts" onPress={() => (this.props.navigation.navigate('Points'))}/>
                <Button title="Запрос Геолокации" onPress={getLocation}/>
                <Button title="Запрос Яндекс" onPress={() => point(marker)}/>
                
            </View>
            
        )
    }
}

export default Home

