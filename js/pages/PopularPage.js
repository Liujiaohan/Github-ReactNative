import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native'

import NavigationBar from '../common/NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
import {ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view'
import PopularTab from './PopularTab'

const URL='https://api.github.com/search/repositories?q=';
const QUERY_STR='&sort=stars';
var ScrollableTabView = require('react-native-scrollable-tab-view');

export default class PopularPage extends Component{

    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();
        this.state={
            result:''
        }
        this.onload();
    }

    onload(){
        let url=this.getURL('ios');
        this.dataRepository.fetchNetRepository(url)
        .then(result=>{
            this.setState({
                result:result
            })
        })
        .catch(error=>{
            this.setState({
                result:JSON.stringify(error)
            })
        });
    }

    getURL(key){
        return URL+key+QUERY_STR;
    }
    render(){
        return( 
        <View style={styles.container}>
            <NavigationBar
                title={'最热'}/>
            <ScrollableTabView renderTabBar={()=><DefaultTabBar someProp={'here'}/>}>
                <PopularTab tabLabel="Java"/>
                <PopularTab tabLabel="iOS"/>
                <PopularTab tabLabel="Android"/>
                <PopularTab tabLabel="JavaScript"/>
            </ScrollableTabView>
        </View>);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tips:{
        fontSize:20
    }
})