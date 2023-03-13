import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1f1f1',
        margin:10,
        padding:10,
        borderRadius:10,
    },
    image:{
        borderRadius:10,
        height: Dimensions.get('window').height / 2,
        margin:5,
        resizeMode:'contain',
    },
    title:{
        fontSize:17,
        color:'black',
        marginTop:20,
        fontWeight:'bold',
        marginLeft:5,
    },
    price:{
        margin:10,
        fontWeight:'bold',
        fontSize:15, 
    },
    inStock:{
        color:'red',
        fontSize:18,
        margin:5,
        fontWeight:"bold"
    },

});