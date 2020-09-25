import React, { Component } from 'react'
import { Button, Text, View, PermissionsAndroid,ActivityIndicator } from 'react-native'
import Points from './Points'
import { styles } from '../../styles'
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-community/async-storage' 
//import Geocoder from 'react-native-geocoding';
//import { Geocoder } from 'react-native-yamap';


// const getData = async () => {
//         try {
//           const value = await AsyncStorage.getItem('@storage_Key');
//           if (value !== null) {
//             // We have data!!
//             this.setState({valueInStor: value})
//             console.log(value);
//           }
//         } catch (error) {
//           // Error retrieving data
//         }
//       };

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

//const API_KEY = 'uG1BHZSLrzK1AedFyZAPt4CTgFcz5Ftnt5CEL3kwiDc'
//const API_KEY = 'LOyi-EItMoSLJn4RR7Y3OMaYLWJ5QQvOUgmzDbawWfbeULvhLHME14Nrm_0ydBJsWGVDX7VEcPpytZg1F_voeQ'
function getAddressFromCoordinates({ latitude, longitude }) {
  return new Promise((resolve) => {
    //const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${LOyi-EItMoSLJn4RR7Y3OMaYLWJ5QQvOUgmzDbawWfbeULvhLHME14Nrm_0ydBJsWGVDX7VEcPpytZg1F_voeQ}&mode=retrieveAddresses&prox=${latitude},${longitude}`
    const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`

    fetch(url)
      .then(res => res.json())
      .then((resJson) => {
        // the response had a deeply nested structure :/
        console.log(resJson.Response.View[0].Result[0].Location.Address.County)
        if (resJson
          && resJson.Response
          && resJson.Response.View
          && resJson.Response.View[0]
          && resJson.Response.View[0].Result
          && resJson.Response.View[0].Result[0]) {
          resolve(resJson.Response.View[0].Result[0].Location.Address.Label)
      
 
        } else {
          resolve()
        }
      })
      .catch((e) => {
        console.log('Error in getAddressFromCoordinates', e)
        resolve()
      })
  })
}


 


const point = async (geo) => { 
  await Geocoder.init('b1c58f81-6468-406f-9e4a-99fb92ff29ef');
  
  console.log(geo)
  const adress = await Geocoder.reverseGeocode(geo);

  console.log(adress)
  console.log(adress.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData) 
}

const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Запрос на Геолокацию",
          message:
            " Для работы устройства необходимо включить геолокацию",
          //buttonNeutral: "Ask Me Later",
          buttonNegative: "Нет",
          buttonPositive: "Да"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log("You can use Location");
        return true      
        
        
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };



const API_KEY = 'WXhH8ASpyi2b12VSBt3N290jKVAnF78TFFfSA9MvZUE'

class Home extends Component {
    state = {
        //altitude: 0,
        latitude: 0,
        longitude: 0,
        marker: {},
        region: '',
        loading: false,
        valueInStor: ''
        
    }


    

    
    componentDidMount = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key');
        if (value !== null) {
          // We have data!!
          this.setState({valueInStor: value})
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
      }
    }

  
    render(props) {

      const {marker,latitude,longitude } = this.state

      

      const getRegion = async (lat,lon) => {
        this.setState({loading: true})    
        const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${API_KEY}&mode=retrieveAddresses&prox=${lat},${lon}`
        console.log('Координаты',lat,lon);
        if (!lat||!lon){ 
            
          this.setState({region: 'Определите геолокацию'})
        } else {
          try {
            let response = await fetch(url);
            let json = await response.json();
            
            setTimeout(() => {
              console.log(json.Response.View[0].Result[0].Location.Address.County) 
              this.setState({region: json.Response.View[0].Result[0].Location.Address.County})
            }, 2000);
            this.setState({loading: false})
          } catch (error) {
            console.error(error);
          }}
        };

      const  getLocation = () => {
        if(requestLocationPermission()) 
        {
          Geolocation.getCurrentPosition((position) => { 
          //this.setState({altitude: position.coords.altitude}) 
          this.setState({latitude: position.coords.latitude.toFixed(2)}) 
          this.setState({longitude: position.coords.longitude.toFixed(2)})  
         // marker.lat = +Math.round(this.state.altitude)
          marker.lat = +Math.round(this.state.latitude)
          marker.lon = +Math.round(this.state.longitude)
          // lati = this.state.latitude
          // long = this.state.longitude

          console.log('marker',marker);
          console.log(position); 
      }, (error) => { 
          // См. таблицы кодов ошибок выше.
          console.log(error.code, error.message); 
      }, { 
          enableHighAccuracy: true, 
          timeout: 2000, 
          maximumAge: 2000 
      }); 
        } else {
          requestLocationPermission()
        }
      }
     // const {altitude, latitude } = this.state
        return (
          <View style={styles.parent}>
            <View style={styles.header}>
            <Text > Регион:  </Text>

            {this.state.region ? <Text style={styles.h2}> {this.state.region} </Text> 
            : <Text style={styles.h2}> {this.state.valueInStor}</Text>}
            
            </View>
            <View style={styles.centerChild}>
                <Text style={styles.h1}> Home Screen </Text>
                <Text> Широта {this.state.latitude}</Text>
                <Text> Долгота {this.state.longitude}</Text>
                
                <Button title="Go to Ponts" onPress={() => (this.props.navigation.navigate('Points',{region: this.state.region}))}/>
                <View style={styles.button}><Button title="Запрос Геолокации" onPress={getLocation}/></View>
                
                {/* <Text>{getAddressFromCoordinates(119,56)}</Text> */}
                 {/* <Button title="Запрос Here" onPress={() => getAddressFromCoordinates(56.04,47.15)}/> */}
                {/* <Button title="Запрос Here" onPress={() => getRegion(latitude,longitude)}/> */}
                <View style={styles.button}><Button title="Запрос Here" onPress={() => getRegion(latitude,longitude)}/></View>
                
                <Button title="Запрос Разрешений" onPress={requestLocationPermission}/>
            </View>
          </View>
            
        )
    }
}

export default Home

