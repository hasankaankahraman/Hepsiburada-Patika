import React from "react";
import { View,Text,Image } from "react-native";
import styles from './Store_Card.style';

const Store_Card = ({urunler}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:urunler.imgURL}}/>
            <Text style={styles.title}>{urunler.title}</Text>
            <Text style={styles.price}>{urunler.price}</Text>
            {urunler.inStock === false && <Text style={styles.inStock}>Stokta Yok</Text>}

        </View>

    );
};
export default Store_Card;