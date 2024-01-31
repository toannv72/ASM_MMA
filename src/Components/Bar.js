// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createBottomTabNavigator, CommonActions } from '@react-navigation/bottom-tabs';
// import { View, StyleSheet } from 'react-native';
// import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native'; // Make sure to import NavigationContainer

// const Tab = createBottomTabNavigator();

// export default function ComBar() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={{
//                     headerShown: false,
//                 }}
//                 tabBar={({ navigation, state, descriptors, insets }) => (
//                     <BottomNavigation.Bar
//                         navigationState={state}
//                         safeAreaInsets={insets}
//                         onTabPress={({ route, preventDefault }) => {
//                             const event = navigation.emit({
//                                 type: 'tabPress',
//                                 target: route.key,
//                                 canPreventDefault: true,
//                             });

//                             if (event.defaultPrevented) {
//                                 preventDefault();
//                             }
//                             else {
//                                 navigation.dispatch({
//                                     ...CommonActions.navigate(route.name, route.params),
//                                     target: state.key,
//                                 });
//                             }
//                         }}
//                         renderIcon={({ route, focused, color }) => {
//                             const { options } = descriptors[route.key];
//                             if (options.tabBarIcon) {
//                                 return options.tabBarIcon({ focused, color, size: 24 });
//                             }

//                             return null;
//                         }}
//                         getLabelText={({ route }) => {
//                             const { options } = descriptors[route.key];
//                             const label =
//                                 options.tabBarLabel !== undefined
//                                     ? options.tabBarLabel
//                                     : options.title !== undefined
//                                         ? options.title
//                                         : route.title;

//                             return label;
//                         }}
//                     />
//                 )}
//             >
//                 <Tab.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{
//                         tabBarLabel: 'Home',
//                         tabBarIcon: ({ color, size }) => {
//                             return <Icon name="home" size={size} color={color} />;
//                         },
//                     }}
//                 />
//                 <Tab.Screen
//                     name="Settings"
//                     component={SettingsScreen}
//                     options={{
//                         tabBarLabel: 'Settings',
//                         tabBarIcon: ({ color, size }) => {
//                             return <Icon name="cog" size={size} color={color} />;
//                         },
//                     }}
//                 />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

// // The rest of your code remains the same

// function HomeScreen() {
//     return (
//         <View style={styles.container}>
//             <Text variant="headlineMedium">Home!</Text>
//         </View>
//     );
// }

// function SettingsScreen() {
//     return (
//         <View style={styles.container}>
//             <Text variant="headlineMedium">Settings!</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });