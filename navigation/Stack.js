import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./Tab";
import MovieDetails from "../component/Details";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackground:"#fecaca"}} initialRouteName="Home">
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
