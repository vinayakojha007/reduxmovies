import * as React from 'react';
import {Button, View, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LikedVideo from '../../screen/LikedVideo';
import MyTabs from '../TabNavigation';
import WatchLaterMovie from '../../screen/WatchLater';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Dashboard"
        component={MyTabs}
        options={{
          drawerIcon: () => (
            <Image
              source={require('../../../../assets/homeIcon.png')}
              style={{color: 'green', height: 20, width: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="WatchLater"
        component={WatchLaterMovie}
        options={{
          drawerIcon: () => (
            <Image
              source={require('../../../../assets/multimedia.png')}
              style={{color: 'green', height: 20, width: 20}}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Liked Videos"
        component={LikedVideo}
        options={{
          drawerIcon: () => (
            <Image
              source={require('../../../../assets/heart.png')}
              style={{color: 'green', height: 20, width: 20}}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
