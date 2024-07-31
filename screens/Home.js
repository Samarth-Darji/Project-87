import * as React from 'react';
import {View, Text} from 'react-native';

export default class HomeScreen extends React.Component{
    render() {
        return(
            <View style={{alignItems: 'centre', flex: 2, justifyContent: 'center',}}>
                <Text style={{alignItems: 'centre', fontSize: 20, marginLeft: 90, color: 'blue'}}>
                    Home Screen!
                </Text>
            </View>
        )
    }
}