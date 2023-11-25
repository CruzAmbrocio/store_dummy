import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from '../store/cartSlice'

const ProductDetails=()=>{
  const product = useSelector((state)=>state.products.selectedProduct);
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const addToCart=()=>{
    dispatch(cartSlice.actions.addCartItem({product: product}));
  }
  return(
    <View>
    <ScrollView>
      <FlatList
        key={'_'}
        keyExtractor={item => "_" + item}
        data={product.images}
        renderItem={({item})=>(
            <Image source={{uri:item}} style={{
              width:width,
              aspectRatio:1}}
            />
        )}
        horizontal
        numColumns={1}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
    <Pressable onPress={addToCart} style={styles.button}>
      <Text style={styles.buttonTex}>Add to cart</Text>
    </Pressable>


    </View>

  );
}
const styles = StyleSheet.create({
  title:{
    fontSize:34,
    fontWeight:'bold',
    marginVertical:10
  },
  price:{
    fontWeight:'500',
    fontSize:16
  },
  description:{
    marginVertical:10,
    fontSize:18,
    lineHeight:30,
    fontWeight:'300',
    paddingBottom:75
  },
  button:{
    position:'absolute',
    backgroundColor:'black',
    bottom:30,
    width:'90%',
    alignSelf:'center',
    padding:20,
    borderRadius:100,
    alignItems:'center'
  },
  buttonTex:{
    color:'white',
    fontWeight:'500',
    fontSize:16 
  }
});

export default ProductDetails;