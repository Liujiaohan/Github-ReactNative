import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';
import Boy from './Boy'

export default class Girl extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const word=params? params.word:null;
        const otherParam = params ? params.otherParam : null;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am girl</Text>
                <Text style={styles.text}>我收到了男孩送的：{JSON.stringify(word)}</Text>
                <Text style={styles.text}
                    onPress={()=>{
                        params.onCallback('巧克力');
                        this.props.navigation.goBack();
                        }}>回赠巧克力</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems: 'center',
    },
    text:{
        fontSize:22,
        textAlign: 'center',
    }
})