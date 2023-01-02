import React, { useState } from 'react';
import { Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';
import { COLORS, icons, images } from '../constants';
import LoginPage from '../screens/LoginPage';
import Verification from '../screens/Verification';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../screens/DrawerContent';
import RegisterPage from '../screens/RegisterPage';
const { width, height } = Dimensions.get('window')

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Root = ({navigation}) => {
    const [token, setToken] = useState('juikkn')
    return (
        <>
            {token === null ?
                <Stack.Navigator>
                    <Stack.Screen name="GetStarted" component={GetStarted}
                        options={() => ({
                            headerTitle: "",
                            headerLeft: () => (
                                <TouchableOpacity >
                                    <Image style={styles.logo} source={images.logo} resizeMode="contain" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                    <Stack.Screen name="LoginPage" component={LoginPage}
                        options={() => ({
                            headerShown: false,
                        })}
                    />
                    <Stack.Screen name="Verification" component={Verification}
                        options={() => ({
                            headerShown: false,
                        })}
                    />
                     <Stack.Screen name="RegisterPage" component={RegisterPage}
                        options={() => ({
                            headerTitle: "",
                            headerStyle: styles.headerStyle,
                            headerLeft: () => (
                                <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
                                    <Image style={styles.back} source={icons.back} resizeMode="contain" />
                                </TouchableOpacity>
                            ),
                        })}
                    />
                </Stack.Navigator>
                :
                <Drawer.Navigator initialRouteName='BottomTabNavigator'
                    drawerContent={props => <DrawerContent {...props} />}
                >
                    <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator}
                        options={() => ({
                            headerShown: false,
                        })}
                    />
                </Drawer.Navigator>
            }
        </>
    );
}

const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor: COLORS.lightWhite,
    },
    logo: {
        width: width * .15,
        height: height * .05,
    },
    back: {
        width: width * .05,
        height: height * .025,
    },
    headerBtn:{
        // borderWidth:1,
        width: width * .1,
        height: height * .05,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: width * .01,
    },
})

export default Root;