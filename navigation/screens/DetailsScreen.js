import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function DetailsScreen ({navigation}) {
    return(
       <SafeAreaView>
         <View style={{ alignItems: 'center', justifyContent: 'center', position: "relative"}}  >
               <Image resizeMode='contain' style = {styles2.topImage} source={ require('../myassets/spicy.jpg')} />
              <View style={styles2.iconCover}>
             
               <Icon onPress={() => navigation.navigate('Home')}  name="arrow-left"size={20} color="black" backgroundColor="white" padding={7}  borderRadius={20}/>
               <Icon name="shopping-basket"size={20} color="black" backgroundColor="white" padding={7} borderRadius={20} />
              </View>
        </View>

        <View style={styles2.grillContainer}>
            <Text style= {styles2.textGrill}>Grilled Cheese Salad with Cream</Text>
            <View style={styles2.iconList}>
            <Icon name="minus"size={10} color="black" marginTop={5}  />
            <Text style={styles2.number}>1</Text>
            <Icon name="plus"size={10} color="orange" marginTop={5}  />
            </View>
        </View>
      
        <View style={styles2.mapContainer}>
            <View style={styles2.map}>
            <Icon name="map-marker"size={20} color="orange" />
        <Text style={styles2.mapText} >2.3Km</Text>
            </View>
            <View style={styles2.map}>
            <Icon name="star"size={20} color="orange" />
        <Text style={styles2.mapText}>4.7 Ratings</Text>
            </View>
            <View style={styles2.map}>
            <Icon name="hourglass"size={15} color="orange" />
        <Text style={styles2.mapText}>20-24 Min</Text>
            </View>
        </View>

        <View style={styles2.description}>
            <Text style={styles2.describe}>Description</Text>
            <Text style={styles2.origin}>Originating from Cyprus, semisoft and slightly nutty halloumi cheese melting when heated, so you can luxuriate  <Text style={styles2.span}>Read More</Text></Text>
        </View>
        

        <View style={styles2.chatContainer}>
            <View style = {styles2.comment}>
            <Icon name="comment-o"size={20} color="orange"  />
                <Text style={styles2.chat}>Chat</Text>
            </View>
            <View style={styles2.addCart}>
                <Text style={styles2.cart}>Add Cart</Text>
            </View>
        </View>

       </SafeAreaView>
    )
}

const styles2 = StyleSheet.create({
    topImage: {
        height: 300,
        width: 370,
        marginTop: 40,
        borderRadius: 20
      
    },
    iconCover: {
        position: 'absolute',
        bottom: 250,
        flexDirection : 'row',
        gap: 280
    },
    grillContainer: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
justifyContent: 'space-between'
    },
    textGrill: {
        fontSize:25,
        fontWeight: 700,
        width:250
    },
    iconList: {
        flexDirection: 'row',
      gap: 16,
      backgroundColor: 'grey',
      padding:10,
      height: 40,
      borderRadius:12
    },
    number: {
        fontSize: 18,
        fontWeight:600
    },
mapContainer: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    gap:20
},
mapText: {
    color: 'grey',
    fontWeight: 400
},
map: {
    flexDirection: 'row',
    gap:10
},

description: {
    marginTop: 15,
    marginLeft:20,
    marginRight:20
},
describe: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:15
},
origin: {
    fontSize: 18,
    width:350,
    color: 'grey'

},
span: {
    color: '#2aaeac'
},

chatContainer: {
    flexDirection: 'row',
    marginTop :150,
    justifyContent: 'center',
    alignItems: 'center',
    gap:30
},
comment: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'white',
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    paddingBottom:15,
      borderRadius:30,
      borderColor: 'orange',
    borderWidth:1
},
addCart : {
    backgroundColor: 'orange',
  paddingLeft:30,
  paddingRight:30,
  paddingTop:15,
  paddingBottom:15,
    borderRadius:30

},
cart: {
    color: 'white',
    fontSize: 20
},
chat: {
    color: 'orange',
    fontSize: 20
}
})