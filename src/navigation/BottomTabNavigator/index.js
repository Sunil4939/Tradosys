import React from "react";
import { Image,  View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons,  } from "../../constants";
import styles from "./styles";
import { AddPostStack, HomeStack, ProfileStack,} from "../StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  return (
  
    <Tab.Navigator initialRouteName='Home'
     screenOptions={() => ({
      tabBarActiveTintColor: COLORS.black,
      tabBarInactiveTintColor: '#999898',
      tabBarStyle:styles.tabBarStyle,
      // tabBarShowLabel: false,
    })} >
      <Tab.Screen name="Home" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => <Image style={[styles.home, focused && {tintColor:COLORS.black}]} source={icons.home} resizeMode="stretch" />
        })}
      />
       <Tab.Screen name="Categories" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => <Image style={[styles.category, focused && {tintColor:COLORS.black}]} source={icons.category} resizeMode="stretch" />
        })}
      />
       <Tab.Screen name="AddPost" component={AddPostStack}
       
        options={() => ({
          tabBarLabel:"Add Post",
          headerShown: false,
          tabBarIcon: ({focused}) => <Image style={[styles.addPost, focused && {tintColor:COLORS.black}]} source={icons.addPost} resizeMode="stretch" />
        })}
      />
       <Tab.Screen name="Suscrbtion" component={HomeStack}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => <Image style={[styles.suscrbtion, focused && {tintColor:COLORS.black}]} source={icons.suscrbtion} resizeMode="stretch" />
        })}
      />
       <Tab.Screen name="Profile" component={ProfileStack}
       
        options={() => ({
          headerShown: false,
          tabBarIcon: ({focused}) => <Image style={[styles.profile, focused && {tintColor:COLORS.black}]} source={icons.profile} resizeMode="stretch" />
        })}
      />
    </Tab.Navigator>
  )
}


export default BottomTabNavigator;

