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
import RepositoryCell from '../common/RepositoryCell'

const URL='https://api.github.com/search/repositories?q=';
const QUERY_STR='&sort=stars';

export default class PopularTab extends Component{


    static propTypes={
        tabLabel:PropTypes.string
    }

    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();
        this.state={
            result:'',
            dataSource:[]
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        var that = this;
        console.log(this);
        let url=this.getURL(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
        .then(result => {
            this.setState(
                {
                    result:result, 
                    dataSource:result.items.slice(0,10)
                }
            );
        })
        .catch(error=>{
            this.setState(() => {
                console.log(error);
            })
        });
    }

    getURL(key){
        return URL+key+QUERY_STR;
    }

    renderItem(data){
            return <RepositoryCell data={data}/>
    }

    render(){
        return( 
        <View style={styles.container}>
            <FlatList
                data={this.state.dataSource}
                renderItem={({item})=>{
                    return this.renderItem(item);
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