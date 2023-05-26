import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";


export default function FoodScreen({navigation})  {
    return (
       <SafeAreaView>
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={() => navigation.navigate('Home')}>
                Chat Screen
                 </Text>
    </View>
  
       </SafeAreaView>
        
    )
}