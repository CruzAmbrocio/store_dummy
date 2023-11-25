import { StatusBar, StyleSheet, View } from 'react-native';
import Navigation from "./src/Navigation"
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
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

export default App;