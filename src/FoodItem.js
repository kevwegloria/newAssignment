import React from 'react';
import { View, Text, Image } from 'react-native';

import FoodScreen from '../navigation/screens/FoodScreen';




export default function FoodItem ({FoodItem, marginLeft, marginRight})  {

    return (
        <View
       style  ={{
           backgroundColor: "white",
           marginTop:1,
           padding: 8,
           marginLeft: marginLeft,
           marginRight: marginRight,
           borderRadius: 12,
           height: 250,
           width: 240,
           
       }}
>

    <Image
      source= {FoodItem.image}
      resizeMode="cover"
      style={{width: 223, height: 170, borderRadius: 12 }}
    />

    <View
    style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        position: "absolute",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 12,
        top: 14,
        right: 20
    }}>

        <View style={{ marginRight: 20 }}>
            <Image
            source={require("../navigation/myassets/star.png")}
            style= {{ width: 14, height: 14}}
            />
        </View>

    </View>

    <View style ={{justifyContent: "center", position: "absolute", top: 20, left: 195}}>
        <Text  style={{ fontWeight: "bold"  }
    
    }>
{FoodItem.ratings}
        </Text>
    </View>
    
 
    
    <View style= {{ padding: 12}}>
      
       <Text  numberOfLines={1} style = {{fontSize: 14, fontWeight: "700"}}>
            {FoodItem.title}
        </Text>
  
        <Text
        style = {{
            fontSize:12,
            paddingTop: 8,
            fontWeight: "600",
            color: "green"
        }}>
            ${FoodItem.price}

        </Text>
        
    
    
</View>
        </View>
    );
    };


    

    