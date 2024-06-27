import {View, Text} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = ()=>{

    const {id} = useLocalSearchParams();

    return (
        <View>
            <Stack.Screen options={{title : 'Details: ' + id }} />
            <Text style={{fontSize : 20}}>Product Details for {id}</Text>
        </View>
    );
};

export default ProductDetailsScreen;