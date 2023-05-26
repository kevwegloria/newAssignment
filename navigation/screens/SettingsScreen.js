import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen ({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <Text onPress={() => navigation.navigate('Home')}>
                   Personal  Screen
                 </Text>
        </View>
    )
}
