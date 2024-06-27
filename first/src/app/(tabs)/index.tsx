import { Image, StyleSheet, Platform, View, Text, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import products from '@assets/data/products';
import ProductListItem from '@/components/ProductListItem';

export default function HomeScreen() {
  return (
    <FlatList 
      data={products}
      renderItem={({item})=>
        < ProductListItem 
          product={item}
        />
      }
      numColumns={2}
      contentContainerStyle={{gap : 10, padding : 10}}
      columnWrapperStyle={{gap : 10}}
    />
  );
}

const styles = StyleSheet.create({
  
});
