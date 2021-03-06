import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Popular from './PopularPage';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return ( 
        <View style ={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab=== 'tb_popular'}
                    selectedTitleStyle={{color:'red'}}
                    title="最热"
                    renderIcon={()=><Image style={styles.image} source={require('../../res/images/ic_popular.png')}/>}
                    renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_popular.png')}/>}
                    onPress={()=>this.setState({selectedTab:'tb_popular'})}>
                    <Popular/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab=== 'tb_trending'}
                    selectedTitleStyle={{color:'red'}}
                    title="趋势"
                    renderIcon={()=><Image style={styles.image} source={require('../../res/images/ic_trending.png')}/>}
                    renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_trending.png')}/>}
                    onPress={()=>this.setState({selectedTab:'tb_trending'})}>
                    <View style={{backgroundColor:'blue',flex:1}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab=== 'tb_favorite'}
                    selectedTitleStyle={{color:'red'}}
                    title="收藏"
                    renderIcon={()=><Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                    renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_favorite.png')}/>}
                    onPress={()=>this.setState({selectedTab:'tb_favorite'})}>
                    <View style={{backgroundColor:'green',flex:1}}></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab=== 'tb_my'}
                    selectedTitleStyle={{color:'red'}}
                    title="我的"
                    renderIcon={()=><Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                    renderSelectedIcon={()=><Image style={[styles.image,{tintColor:'red'}]} source={require('../../res/images/ic_my.png')}/>}
                    onPress={()=>this.setState({selectedTab:'tb_my'})}>
                    <View style={{backgroundColor:'red',flex:1}}></View>
                </TabNavigator.Item>
            </TabNavigator>
        </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 22,
        width: 22,
    }
});