import React, { Component } from 'react'
import { Button, Text, View, PermissionsAndroid, SafeAreaView, } from 'react-native'
import Points from './Points'
import { styles } from '../../styles'
import Geolocation from 'react-native-geolocation-service'; 
import Geocoder from 'react-native-geocoding';


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

        Geolocation.getCurrentPosition((position) => { 
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
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

class Home extends Component {
    state={}


    componentDidMount() {

    }

        
    
    render(props) {
        
        return (
            <View style={styles.center}>
                <Text style={styles.h1}> Home Screen </Text>
                <Button title="Go to Ponts" onPress={() => (this.props.navigation.navigate('Points'))}/>
                <Button title="Запрос Геолокации" onPress={requestLocationPermission}/>
            </View>
            
        )
    }
}

export default Home

