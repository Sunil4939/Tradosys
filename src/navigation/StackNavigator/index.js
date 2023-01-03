import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../../screens/HomePage';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { icons, images } from '../../constants';
import styles from "./styles";
import SearchPage from '../../screens/SearchPage';
import ProfilePage from '../../screens/ProfilePage';
import NotificationPage from '../../screens/NotificationPage';
import EnquiryPage from '../../screens/EnquiryPage';
import FilterPage from '../../screens/FilterPage';
import ProductDetails from '../../screens/ProductDetails';
import AppFeedBack from '../../screens/AppFeedBack';
import SendEnquiry from '../../screens/SendEnquiry';
import EditProfile from '../../screens/EditProfile';
import Dashboard from '../../screens/Dashboard';
import ChatScreen from '../../screens/ChatScreen';
import BusinessList from '../../screens/BusinessList';
import AddProduct from '../../screens/AddProduct';
import MyBusiness from '../../screens/MyBusiness';
import PostScreen from '../../screens/PostScreen';
import Bugs from '../../screens/Bugs';
import Features from '../../screens/Features';
import Doctors from '../../screens/Doctors';

const Stack = createStackNavigator();

const HomeStack = () => {
 
  return (
    <Stack.Navigator initialRouteName='HomePage'>
      <Stack.Screen name="HomePage" component={HomePage}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitle: "Business India",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={styles.menu} source={icons.menu} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightBtn} onPress={() => navigation.navigate('NotificationPage')}>
              <Image style={styles.notification} source={icons.notification} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="SearchPage" component={SearchPage}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitle: "Business India",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.whiteLeft} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.rightRow}>
              <TouchableOpacity style={styles.headerRightBtn} onPress={() => navigation.navigate('NotificationPage')}>
                <Image style={styles.notification} source={icons.notification} resizeMode="contain" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerRightBtn}>
                <Image style={styles.notification} source={icons.share1} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Stack.Screen name="NotificationPage" component={NotificationPage}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitle: "Notifications",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.whiteLeft} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
       <Stack.Screen name="FilterPage" component={FilterPage}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Filter",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
        <Stack.Screen name="ProductDetails" component={ProductDetails}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitle: "Business India",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.whiteLeft} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightBtn} onPress={() => navigation.navigate('NotificationPage')}>
              <Image style={styles.notification} source={icons.notification} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="AppFeedBack" component={AppFeedBack}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "App FeedBack",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
        <Stack.Screen name="Bugs" component={Bugs}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Report a Bug ",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
       <Stack.Screen name="Features" component={Features}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Suggest an App Feature",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
      <Stack.Screen name="SendEnquiry" component={SendEnquiry}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Send Enquiry",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
      <Stack.Screen name="Dashboard" component={Dashboard}
        options={({ navigation }) => ({
          // headerShown: false,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={styles.menu} source={icons.menu1} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.rightRow}>
              <TouchableOpacity style={styles.headerRightBtn1} onPress={() => navigation.navigate('NotificationPage')}>
              <Image style={styles.notification} source={icons.notification1} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerRightBtn1} >
              <Image style={styles.image1} source={images.image1} resizeMode="contain" />
            </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const ProfileStack = () => {

  return (
    <Stack.Navigator initialRouteName='ProfilePage'>
      <Stack.Screen name="ProfilePage" component={ProfilePage}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={styles.menu} source={icons.menu} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightBtn} onPress={() => navigation.navigate('NotificationPage')}>
              <Image style={styles.notification} source={icons.notification} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="EnquiryPage" component={EnquiryPage}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Enquires",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
       <Stack.Screen name="EditProfile" component={EditProfile}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Profile",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
         <Stack.Screen name="ChatScreen" component={ChatScreen}
        options={({ navigation }) => ({
          // headerShown: false,
          headerStyle: styles.headerStyle,
          headerTitle: "Jane",
          headerTitleStyle: styles.headerTitle2,
          headerLeft: () => (
           <View style={styles.leftRow}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.left_arrow} source={icons.left_arrow} resizeMode="contain" />
            </TouchableOpacity>
            <View style={styles.dpBox}>
            <Image style={styles.dp} source={images.dp} resizeMode="contain" />
            </View>
           </View>
          ),
          headerRight: () => (
            <View style={styles.rightRow}>
              <TouchableOpacity style={styles.headerBtn2} >
              <Image style={styles.notification} source={icons.video_call} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn2} >
              <Image style={styles.call1} source={icons.call1} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn2} >
              <Image style={styles.notification} source={icons.three_dots} resizeMode="contain" />
            </TouchableOpacity>
            </View>
          ),
        })}
      />
       <Stack.Screen name="BusinessList" component={BusinessList}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Free Listing",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
       <Stack.Screen name="AddProduct" component={AddProduct}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Add Product",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
       <Stack.Screen name="MyBusiness" component={MyBusiness}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "My Business",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),

        })}
      />
    </Stack.Navigator>
  );
}

const AddPostStack = () => {

  return (
    <Stack.Navigator initialRouteName='PostScreen'>      
       <Stack.Screen name="PostScreen" component={PostScreen}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Status",
          headerTitleStyle: styles.headerTitle1,
          headerRight: () => (
            <TouchableOpacity style={styles.postBtn}>
              <Text style={styles.post}>POST</Text>
            </TouchableOpacity>
          ),
        })}
      />
     
        <Stack.Screen name="Doctors" component={Doctors}
        options={({navigation}) => ({
          headerTitleAlign: 'center',
          headerTitle: "Doctors",
          headerTitleStyle: styles.headerTitle1,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
              <Image style={styles.back} source={icons.back} resizeMode="contain" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRightBtn}>
              <Image style={styles.notification} source={icons.search1} resizeMode="contain" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
export {
  HomeStack,
  ProfileStack,
  AddPostStack,
}