import { NAVIGATION } from '@/constants';
import { Author, Book } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const RootStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName={NAVIGATION.author}>
      <RootStack.Screen name={NAVIGATION.author} component={Author} />
      <RootStack.Screen
        name={NAVIGATION.book}
        component={Book}
        options={({ route }) => ({ title: route.params.item.name ?? 'Books' })}
      />
    </RootStack.Navigator>
  );
}
