import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const HomeScreen = require("./screens/HomeScreen");
const DetailsScreen = require("./screens/DetailsScreen");

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="Home" component={HomeScreen} options={{
          title: 'PokeApp',
          headerStyle: {
            backgroundColor: '#333EFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Menu.Screen name="Details" component={DetailsScreen} options={{
          title: 'Detalles',
          headerStyle: {
            backgroundColor: '#333EFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Menu.Navigator>
    </NavigationContainer>
  );
}
