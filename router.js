import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import Home from "./screens/main/Home";
import PostsScreen from "./screens/main/PostsScreen";
import CreatePostsScreen from "./screens/main/CreatePostsScreen";
import ProfileScreen from "./screens/main/ProfileScreen";
import CommentsScreen from "./screens/main/CommentsScreen";
import MapScreen from "./screens/main/MapScreen";

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <MainStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            height: 83,
            paddingTop: 9,
            paddingHorizontal: 40,
          },
          null,
        ],
      }}
    >
      {/* <MainStack.Screen name="Home" component={Home} /> */}
      <MainStack.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/images/grid.png")} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/images/new.png")} />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={require("./assets/images/user.png")} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainStack.Navigator>
  );
};

export default useRoute;
