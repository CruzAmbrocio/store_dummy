import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import products from '../data/products';

const ProductsList=()=>{
    return(
      <FlatList
        key={'_'}
        data={products}
        renderItem={({item})=>(
          <View style={styles.itemContainer}>
            <Image source={{uri:item.image}} style={styles.image}/>
          </View>
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