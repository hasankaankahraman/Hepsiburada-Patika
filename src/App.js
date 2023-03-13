  import React from "react";
  import { SafeAreaView,View,Text , FlatList,Image, StyleSheet, ScrollView, Dimensions, TextInput} from "react-native";
  import products from './products.json';
  import Store_Card from "./components/Store_Card";



  function App(){

    // const RenderNews = ({item}) => <Store_Card urunler={item} /> renderItem bir kez çağırılır renderItem={RenderNews}
    return(
      <SafeAreaView>
        <View>
        <Text style={styles.patika_title}> hepsiburada </Text> 
        
        {/* hepsiburada yazısı kalacak ama flexten dolayı alt gözükmüyor. */}
        {/*
        <TextInput style={styles.text_input}  placeholder='Ara...' placeholderTextColor={'black'} ></TextInput>
        Yukarıda kaldığı için FlatListin içine aldım. 
        */}

          <FlatList showsVerticalScrollIndicator = {false}
          ListHeaderComponent={()=><>

          <ScrollView horizontal>
          {products.map(yatayproducts => (
          <Image 
            style={styles.yatayproducts} 
            source={{uri:yatayproducts.imgURL}}
              />
              ))}
        </ScrollView>

          <TextInput style={styles.text_input} placeholder='Ara...' placeholderTextColor={'black'}></TextInput></>
          }
          numColumns={2}   
          keyExtractor={item => item.id}
          data={products}
          renderItem={({item}) => <Store_Card urunler={item} />}
          />
        </View>
      </SafeAreaView>
      
    )
  }

  export default App;

  const styles =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'orange'
    },
    patika_title:{
      marginTop:10,
      color:'orange',
      fontSize:35,
      fontWeight:'bold',
  
    },
    text_input:{
      width:Dimensions.get("window").width - 10,
      height:Dimensions.get("window").height/15,
      backgroundColor:'#f1f1f1',
      borderWidth:1,
      borderColor:'#f1f1f1',
      borderRadius:10,
      margin:10,
      marginLeft:5,
      marginRight:5,
      
    },
    yatayproducts:{
      width:Dimensions.get("window").width / 1,
      borderRadius:10,
      height: Dimensions.get('window').height / 5,
      margin:10,
      resizeMode:'contain',
    }
  })