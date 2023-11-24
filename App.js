import { StatusBar, StyleSheet, View } from 'react-native';
import ProductsList from './src/screens/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
      <ProductsList/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
