import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../store/productSlice';

const ProductsList=({navigation})=>{
    const products = useSelector((state)=>state.products.products);
    const dispatch = useDispatch();
    return(
      <FlatList
        key={'_'}
        data={products}
        renderItem={({item})=>(
          <Pressable 
          style={styles.itemContainer}
          onPress={()=> {
            dispatch(productSlice.actions.setSelectedProduct(item.id))
            navigation.navigate('Product Details')
          }}>
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