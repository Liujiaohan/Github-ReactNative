import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Text,

} from 'react-native'

import { Navigator } from 'react-native-deprecated-custom-components'
import NavigationBar from '../common/NavigationBar'
import HomePage from './HomePage'
export default class WelcomePage extends Component{
    componentDidMount(){
        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            },4000)
        })
    }

    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }

    render(){
        return( 
        <View>
            <NavigationBar
                title={'欢迎'}
            />
        </View>);
    }
}