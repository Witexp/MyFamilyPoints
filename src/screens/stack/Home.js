import React, { Component } from 'react'
import { Button, Text, View, PermissionsAndroid,ActivityIndicator } from 'react-native'
import { styles } from '../../styles'
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-community/async-storage' 
import { connect } from 'react-redux'
import { addRegion } from '../../Redux/actions'


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
        regionSt: '',
        loading: false,
        valueInStor: '' 
    }

    getLocation = () => {
        Geolocation.getCurrentPosition((position) => { 
        const lat = position.coords.latitude.toFixed(2)
        const lon = position.coords.longitude.toFixed(2)
        this.setState({latitude: lat}) 
        this.setState({longitude: lon})  
       // console.log('lat && lon: ', lat, '&&', lon);
        this.getRegion(lat,lon)
        
    }, (error) => { 
        // См. таблицы кодов ошибок выше.
        console.log(error.code, error.message); 
    }, { 
        enableHighAccuracy: true, 
        timeout: 2000, 
        maximumAge: 2000 
    }); 
    
    }

    getRegion = async (lat,lon) => {
      //this.setState({loading: true})    
      const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${API_KEY}&mode=retrieveAddresses&prox=${lat},${lon}`
      console.log('Координаты',lat,lon);
      if (!lat||!lon){ 
          
        this.setState({region: 'Определите геолокацию'})
      } else {
        try {
          let response = await fetch(url);
          let json = await response.json();
          
          setTimeout(() => {
            console.log('Регион по геолокации',json.Response.View[0].Result[0].Location.Address.County) 
            this.setState({regionSt: json.Response.View[0].Result[0].Location.Address.County})
            this.props.addRegion(json.Response.View[0].Result[0].Location.Address.County)
          }, 2000);
          
          //this.setState({loading: false})
        } catch (error) {
          console.error(error);
        }}
      };



    

    
    componentDidMount = async () => {
      await requestLocationPermission()
      if(requestLocationPermission){
        await this.getLocation()
      }

      // try {
      //   const value = await AsyncStorage.getItem('@region_key');
      //   if (value !== null) {
      //     // We have data!!
      //     this.setState({valueInStor: value})
      //    // console.log(value);
      //   }
      // } catch (error) {
      //   // Error retrieving data
      // }
    }

  
    render(props) {
      const {marker,latitude,longitude } = this.state

        return (
          <View style={styles.parent}>
            <View style={styles.header}>
            <Text > Регион:  </Text>

            <Text style={styles.h2}> {this.props.regioninstore} </Text> 
           
            
            </View>
            <View style={styles.centerChild}>
                <Text style={styles.h1}> Home Screen </Text>
                <Text> Широта {this.state.latitude}</Text>
                <Text> Долгота {this.state.longitude}</Text>
                
                <View style={styles.button}><Button title="Сохранить регион в Storage" onPress={() => (this.props.navigation.navigate('Location',{region: this.state.regionSt}))}/></View>
                <View style={styles.button}><Button title="Очки Детей" onPress={() => (this.props.navigation.navigate('ChildPoints'))}/></View>
              
                
                
                <Button title="Запрос Разрешений" onPress={requestLocationPermission}/>
            </View>

          </View>
            
        )
    }
}

const mapStateToProps = state => {
  return {
    regioninstore: state.regioninstore.region
  }
}

export default connect(mapStateToProps, {addRegion}) (Home)


