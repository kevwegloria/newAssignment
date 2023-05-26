import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Linking, FlatList, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { categories } from '../../src/categories';
import FoodItem  from '../../src/FoodItem';




export default function HomeScreen ({navigation}) {
    const [text, onChangeText] = React.useState('Search food you would like to eat');


    return(
        <SafeAreaView>
            <View style= {styles.main} onPress={() => navigation.navigate('Home')}>
                <View style= {styles.container1}>

              <View style= {styles.menuContainer}>
              <Icon name="bars"size={20} color="white" />
              <View style = {styles.secondMenu}>
              <Icon name="shopping-basket"size={20} color="white" />
              <Icon name="bell-o"size={20} color="white" />
              </View>
              </View>

              <View style={ styles.deliContainer}>
    <Text  style={ styles.deliText}>Delicious food ready to be delivered to you <Image style = {styles.noodles} resizeMode='contain' source={ require('../myassets/noodles.png')} /> </Text>
    
</View>

                    <View style = {styles.searchContainer}>
                          <View style = {styles.searchMenu}>
                          <Icon name="search" size={20} color= "white" position = 'absolute' left={30} top={20}/> 
                          <TextInput
                          style ={styles.input}
                          onChangeText={onChangeText}
        value={text} />
                          </View>
                          
                     </View>
                </View>


          <View style={styles.main2}>
          <View style={styles.container2}>
                <View style={styles.recContainer}>
                    <Text style = {styles.recommend} >Recommended</Text>
                    <Text style = {styles.sell} onPress={() => Linking.openURL('#')}>
  See All</Text>
                </View>

            </View>

            <View style ={styles.container3}>
 <FlatList 
 data={categories}
 horizontal
 keyExtractor={item => item.id}
 renderItem={({item, index}) => {
    console.log("items", item);
    return (
    <FoodItem FoodItem={item}
         marginLeft ={index == 0 ? 20 : 12} 
         marginRight ={index == item.length - 1 ? 20 : 0} />
    );
 }}

 />

<View style = {styles.nearContainer}>
      <Text style = {styles.near}>Near to you</Text>
      <Text style = {styles.sell}>Sell All</Text>
      </View>

      <View style= { styles.chickenContainer}>
          <View style = {styles.chickenCon}>
          <Image style={styles.chicken} resizeMode='contain' source={ require('../myassets/chicken.jpg')}/>
          <View style = {styles.fried}>
            <Text style = {styles.big}>Big Fried Chicken</Text>
            <Text style = {styles.gam}>Gaminbar  .   9.2km</Text>
            <View style = {styles.rating1}>
      <Image style = {styles.star1} resizeMode='contain' source={require('../myassets/star.png')}/>
      <Text style = {styles.chicText}>4.4</Text>
     </View>
          </View>
          </View>
          <View >
            <Text style = {styles.chickenPrice}>$4.2</Text>
          </View>
      </View>
            </View>
          </View>
           
        </View>
        
     
        </SafeAreaView>
    )

    
}

// const FoodScreen = ({navigation, route}) => {
//     return 
// }

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#2aaeac',
        
    },
    main2: {
        height: '100%',
        backgroundColor: 'white'
    },
    container1: {
        backgroundColor: '#2aaeac',
        paddingTop: 50,
        paddingBottom:27,
        
       
    },
    
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    secondMenu: {
        flexDirection: 'row',
        gap:20,
    },
    deliContainer: {
        paddingTop: 35,
        marginLeft:28,
        paddingBottom:25,
    },
    deliText: {
        fontSize: 24,
        color: 'white',
        fontWeight:900

    },
    noodles: {
        height: 20,
        width: 20,
    },

    searchMenu: {
        backgroundColor: '#2aaeac',
        position: 'relative'
        
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 13,
        paddingLeft:50,
        color: "white",
        borderColor: "white",
        borderRadius: 10
    },
    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: 'white',
        paddingTop: 30,
    },
    recContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20,
        
    },
    recommend: {
        color: 'black',
        fontSize:20,
        fontWeight:900
    },
    sell:{
        fontSize:20,
        color:'#2aaeac',
        fontWeight:900
    },
    container3: {
        backgroundColor: "white"
    },
    near: {
        color: 'black',
        fontSize:20,
        fontWeight:900
    },
    nearContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20,
        paddingTop:10
    },
    chickenCon : {

        flexDirection:'row',
        gap:15,
            },
    chicken: {
        height: 100,
        width: 100,
        borderRadius:20,
    },
    chickenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    star1:{
        height:12,
        width:12
    },
    rating1 : {
        flexDirection: 'row',
        gap: 5
    },
    gam: {
        color: 'grey',
        paddingBottom:5
    },
    big: {
        fontWeight:700,
        fontSize:15,
        paddingBottom:5
    },
    fried : {
        paddingTop:10
    },
    chickenPrice: {
        fontSize:15,
        color:'#2aaeac',
        fontWeight:700
    },
})