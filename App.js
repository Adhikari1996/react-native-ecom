// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, Alert, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Welcome"
    //       component={WelcomeScreen}
    //       options={{ title: 'Welcome', headerTitleAlign: 'center' }}
    //     />
    //     <Stack.Screen name="ViewImage" component={ViewImageScreen} options={{
    //       headerTitleAlign: 'center',
    //     }} />
    //     <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} options={{
    //       headerTitleAlign: 'center',
    //     }} />
    //   </Stack.Navigator>

    // </NavigationContainer>

    // <WelcomeScreen />
    // <ViewImageScreen/>
    <View>
      <Screen>
        <ListItem title="My title" subTitle="My subtitle" ImageComponent={<Icon name="email" />} />
      </Screen>
    </View>
    // <View>
    //   {/* <Text>Hello React native</Text> */}
    //   {/* <TouchableOpacity onPress={() => console.log('Image tapped')}><Image source={{ width: 300, height: 400, uri: 'https://picsum.photos/200/300' }} /></TouchableOpacity> */}
    //   {/* <Button color="orange" title="push me" onPress={() => Alert.alert("My title", "Welcome to react-native", [{ text: 'Yes', onPress: () => console.log('Yes') }, { text: 'No', onPress: () => console.log('NO') }])} /> */}
    //   {/* <View style={{ backgroundColor: 'dodgerblue', width: '100%', height: '30%' }}>

    //   </View> */}
    //   {/* <View style={{ backgroundColor: 'dodgerblue', width: 100, height: 100 }} />
    //   <View style={{ top: 20, left: 20, position: 'relative', backgroundColor: 'gold', width: 100, height: 100 }} />
    //   <View style={{ backgroundColor: 'tomato', width: 100, height: 100 }} /> */}

    //   <StatusBar style="auto" />
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     flexWrap: 'wrap',
//     alignContent: 'center'

//   },
// });
