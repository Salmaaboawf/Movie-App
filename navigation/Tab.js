import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Now from "../pages/nowplay";
import Top from "../pages/toprated";
import Home from "../component/Home.js";
import Fav from "../pages/fav.js";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Home} />
      <Tab.Screen name="Now" component={Now} />
      <Tab.Screen name="Top" component={Top} />
      <Tab.Screen name="fav" component={Fav} />

    </Tab.Navigator>
  );
}
