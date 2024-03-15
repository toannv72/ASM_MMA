import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/page/Home";
import ProfileSettingScreen from "./src/page/Profile";
import Detail from "./src/page/Detail";
import Search from "./src/page/Search";
import HomeScreen2 from "./src/page/Home2";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homes">
        <Stack.Screen
          name="Homes"
          options={{ headerLeft: null, headerShown: false }}
          component={MyBottomNavigationBar}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
          <Stack.Screen
          options={{ headerLeft: null, headerShown: false }}
          name="Search"
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function MyBottomNavigationBar() {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          elevation: 30, // Bóng đổ cho Android
          shadowColor: '#000', // Màu của bóng đổ cho iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Like") {
            iconName = focused ? "heart" : "ios-heart-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color='black' />;
        },
      })}

      keyboardShouldPersistTaps="handled"
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Like"
        options={{ headerShown: false }}
        component={ProfileSettingScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={HomeScreen2}
      />
    </Tab.Navigator>
  );
}

export default App;
