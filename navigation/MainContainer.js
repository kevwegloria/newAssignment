import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import SearchScreen from './screens/SearchScreen';
import FoodScreen from './screens/FoodScreen';
import FoodItem from '../src/FoodItem';


//Screen names
const homeName = 'Home';
const detailsName = 'Chat';
const settingsName = 'Profile';
const searchName = 'Search';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


 function Main() {
    return (
        <NavigationContainer>
        
         <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'grey',
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === detailsName) {
                        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses';
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline';
                    }  else if (rn === settingsName) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
                
            })}
           
          
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={detailsName} component={DetailsScreen}  options={{
            tabBarStyle: { display: "none" },
          }}/>
                <Tab.Screen name={searchName} component={SearchScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>
               


            </Tab.Navigator>
         

        </NavigationContainer>
        
    )
}

function MainContainer(props) {
    return (
        <NavigationContainer>
             <Stack.Navigator 
                
                   screenOptions={({route}) => ({
                    headerShown: false,
                   })}
             >

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
        <Stack.Screen name="FoodItem" component={FoodItem} />
         </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main;