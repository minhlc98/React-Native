/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class App extends Component{
  render(){   
    const imageURL={
          uri:"https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/53101200_311308536406291_1824184430084751360_n.jpg?_nc_cat=106&_nc_oc=AQkE1DsN6ePZ5366nOD3Ri6w-9sZdHTjKlKrPDK-msyParr63t6yYleCA8qrgDkqwLWT65SxWlUKkooMExXT5odA&_nc_ht=scontent.fsgn3-1.fna&oh=8cdeee7a689bb65f4e810398a267d430&oe=5CE45D28"
    };
    return (
        <View style={{
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor:'orange',
            marginTop:-10

        }}>
            <Text style={{marginBottom:10,fontWeight:'bold',fontSize:48, color:'#4169E1'}}>My Profile</Text>
            <Image source={ imageURL } style={{width:300,height:200 }}>
            </Image>
            <Text style={{marginTop:10, color:'blue', fontWeight:'bold', fontSize:18}}>Cẩm Minh</Text>
            <Text style={{marginTop:5,  color:'black',fontWeight:'bold', fontSize:16 }}>Welcome To My React Native Project</Text>
        </View>
        
      );
  }
}
