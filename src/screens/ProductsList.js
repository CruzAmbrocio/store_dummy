import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import products from '../data/products';

const ProductsList=({navigation})=>{
    return(
      <FlatList
        key={'_'}
        data={products}
        renderItem={({item})=>(
          <Pressable 
          style={styles.itemContainer}
          onPress={()=> navigation.navigate('Product Details')}>
            <Image source={{uri:item.image}} style={styles.image}/>
          </Pressable>
        )}
        numColumns={2}
      />
    );
}
const styles = StyleSheet.create({
    itemContainer:{
      width:'50%',
      padding: 1
    },
    image:{
      width:'100%',
      aspectRatio:1
    }
});
  
export default ProductsList;