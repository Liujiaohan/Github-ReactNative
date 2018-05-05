import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';
import Girl from './Girl';
import NavigationBar from './js/common/NavigationBar';
export default class Boy extends React.Component{
    constructor(props){
        super(props);
        this.state={
            word:''
        }
    }

    render(){
        var feedback=this.state.word;
        if (feedback!=''){
            feedback='收到女孩的：'.concat(feedback);
        }else{
            feedback='';
        }
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='boy'
                    statusBar={
                        {
                            backgroundColor:'red',
                        }
                    }
                />
                <Text style={styles.text}>I am boy</Text>
                <Text style={styles.text}
                    onPress={()=>{
                        this.props.navigation.navigate('Girl',{
                            itemId:1,
                            word:'一枝玫瑰',
                            onCallback:(word)=>{
                                this.setState({
                                    word:word
                                });
                            }
                        })
                    }}>送女孩一枝玫瑰</Text>
                   <Text style={styles.text}>{feedback}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:22,
        textAlign: 'center',
    }
})