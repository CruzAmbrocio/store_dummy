import { FlatList, StyleSheet, Text, View, Pressable } from "react-native"
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";

const ShoppingCartTotals= ()=>(
  <View style={styles.totalContainer}>
    <View style={styles.footerRow}>
      <Text style={styles.sub}>Subtotal:</Text>
      <Text style={styles.sub}>410,00 US$</Text>
    </View>
    <View style={styles.footerRow}>
      <Text style={styles.sub}>Delivery:</Text>
      <Text style={styles.sub}>410,00 US$</Text>
    </View>
    <View style={styles.footerRow}>
      <Text style={styles.title}>Total:</Text>
      <Text style={styles.title}>410,00 US$</Text>
    </View>
  </View>
)

const ShoppingCart=()=>{
  const checkout=()=>{

  }
  return (
    <>
      <FlatList 
        style={styles.itemContainer} 
        key={'_'}
        keyExtractor={item => "_" + item.product.id}
        data={cart}
        renderItem={({item})=><CartListItem cartItem={item}/>}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable onPress={checkout} style={styles.button}>
        <Text style={styles.buttonTex}>Checkout</Text>
      </Pressable>
    </>
  )
}
const styles = StyleSheet.create({
  itemContainer:{
    width:'100%',
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  totalContainer:{
    margin:20,
    paddingTop:10,
    borderColor:'gainsboro',
    borderTopWidth:1
  },
  footerRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:2
  },
  sub:{
    fontSize:16,
    color:'gray'
  },
  title:{
    fontSize:16,
    fontWeight:'500'
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
export default ShoppingCart;