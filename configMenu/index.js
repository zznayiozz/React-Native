import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Intro from './../Components/Intro';
import ModalStack from './ModalStack';

const Navigstor = StackNavigator(
    {
        ModalStack: {
            screen: ModalStack,
        }
    },
    {
        headerMode: 'none',
        initialRouteParams : Intro,
    }
);

export default Navigstor;