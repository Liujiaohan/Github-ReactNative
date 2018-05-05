import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types'
import DataRepository from '../expand/dao/DataRepository'
const URL='https://api.github.com/search/repositories?q=';
const QUERY_STR='&sort=stars';

export default class PopularTab extends Component{


    static propTypes={
        tabLabel:PropTypes.strin
    }

    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();
        this.state={
            result:'',
            dataSource:{}
        }
    }

    componentDidMount(){
        this.onload();
    }

    onload(){
        let url=this.getURL(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
        .then(result=>{
            this.setState({
                result:result,
                dataSource:JSON.parse(result).slice(0,10)
            })
            console.log(result);
            console.log(this.dataSource);
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

    renderItem(data){
        return <View style={styles.item}>
            <Text>{data.full_name}</Text>
            <Text>{data.description}</Text>
            <Text>{data.owner.avatar_url}</Text>
            <Text>{data.stargazers_count}</Text>
        </View>
    }

    render(){
        return( 
        <View style={styles.container}>
            <FlatList
                data={this.state.dataSource}
                renderItem={(item)=>{
                    this.renderItem(item)
                }}/>
        </View>);
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    tips:{
        fontSize:20
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})