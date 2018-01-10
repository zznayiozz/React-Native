import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import SlideMenu from './SlideMenu';

import Intro from './../Components/Intro';
import Home from './../Components/Home';
import About from './../Components/About';
import ModalStack from './ModalStack';

const MyDrewerNavigator = DrawerNavigator(
    {
        Intro: { screen: Intro },
        Home: { screen: Home },
        About: { screen: About },
        
    }, {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerPosition: 'left',
        
      
        contentComponent: props => <SlideMenu {...props} />,
    }
);

export default MyDrewerNavigator;


