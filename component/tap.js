import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Now from '../pages/nowplay';  // تأكد من تصحيح المسار
import Top from '../pages/toprated';  // تأكد من تصحيح المسار

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Now Playing" component={Now} />
      <Tab.Screen name="Top Rated" component={Top} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
