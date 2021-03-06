import React,{Component} from 'react';
import{
    View,
    StyleSheet,
    Text,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    Image,
    Alert
} from 'react-native'


export default class RepositoryCell extends Component{
    constructor(props){
        super(props);
        this.state={
            isFavorite:true,
            favoriteIcon:true? require('../../res/images/ic_star.png'): require('../../res/images/ic_unstar_transparent.png'),
        }
    }

    setFavoriteState(isFavorite){
    
    }

    onPressFavorite(){
        this.setFavoriteState(!this.isFavorite);
    }


    render(){
        return (
            <TouchableHighlight
                style={styles.container}>
                <View style={styles.cell_container}>
                    <Text style={styles.title}>{this.props.data.full_name}</Text>
                    <Text style={styles.description}>{this.props.data.description}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>Author:</Text>
                            <Image style={{height:22,width:22}}
                            source={{uri:this.props.data.owner.avatar_url}}/>
                        </View>
                        <View style={{flexDirection:'row',alignItems:"center"}}>
                            <Text>Stars:</Text>
                            <Text>{this.props.data.stargazers_count}</Text>
                        </View>
                        <Image style={{height:22,width:22}}
                        source={require('../../res/images/ic_star.png')}/>
                    </View>
               </View>
            </TouchableHighlight>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    title :{
        fontSize: 16,
        marginBottom:2,
        color: '#212121',
        flex: 1
    },
    description:{
        fontSize: 14,
        marginBottom:2,
        color:'#757575'
    },
    author:{
        fontSize: 4,
        marginBottom:2,
        color:'#757575'
    },
    cell_container:{
        backgroundColor:'white',
        padding:10,
        marginLeft:5,
        marginVertical:2,
        borderWidth:0
    }
});