import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Text,
} from 'react-native'

import { Navigator } from 'react-native-deprecated-custom-components'
import WelcomePage from'./Welcome';
import HomePage from './HomePage';

//function setup(){
    // initialize
    export default class Root extends Component{

        renderScene(route,navigator){
            let Component=route.component;
            return <Component {...route.params} navigator={navigator}/>
        }

        render(){
            return <Navigator 
                initialRoute={{component:HomePage}}
                renderScene={(route,navigator)=>this.renderScene(route,navigator)}
            />
        }
    }