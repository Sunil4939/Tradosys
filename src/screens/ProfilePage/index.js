import React, { useState } from "react";
import { ScrollView, Text, StatusBar, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import { COLORS, icons, images } from "../../constants";
import styles from "./styles";
import DocumentPicker from 'react-native-document-picker';
import { NavigateButton } from "../../component/NavigateButton";

const ProfilePage = ({ navigation }) => {
    const [singleFile, setSingleFile] = useState(images.profileImage1);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
        });
        setSingleFile(res);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.blue2} barStyle="dark-content" />
            <ImageBackground source={images.ellipse} style={styles.profileContainer}>
                <View>
                    <View style={styles.profileBox}>
                    <Image source={singleFile} style={styles.profileImage1} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.editBtn} onPress={selectFile}>
                        <Image source={icons.edit} style={styles.edit} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styles.name}>Adom Shafi</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.text}>Edit Profile</Text>
            </TouchableOpacity>

            <View style={styles.NavigateContainer}>
                <NavigateButton
                    title={'List a Business'}
                    subtitle={'Add your services and products'}
                    icon={icons.list}
                    onPress={() => navigation.navigate('BusinessList')}
                />
                <NavigateButton
                    title={'Your  business verify in 24 hours '}
                    subtitle={'Please wait after some time.'}
                    icon={icons.clock1}
                />
                <NavigateButton
                    title={'My Business'}
                    icon={icons.bulb}
                    onPress={() => navigation.navigate('MyBusiness')}
                />
                <NavigateButton
                    title={'My Enquiry'}
                    icon={icons.enquiry}
                    onPress={() => navigation.navigate('EnquiryPage')}
                />
                <NavigateButton
                    title={'Add Product '}
                    icon={icons.addPost}
                    iconStyle={styles.addPost}
                    onPress={() => navigation.navigate('AddProduct')}
                />
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default ProfilePage;