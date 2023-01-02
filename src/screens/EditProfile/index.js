import React, { useState } from "react";
import { Text, StatusBar, View, TouchableOpacity, Image, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonComponent } from "../../component/ButtonComponent";
import { COLORS, icons, images, } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";

const EditProfile = ({ navigation }) => {
    const [text, setText] = useState('');
    const [singleFile, setSingleFile] = useState(images.profileImage);

    const selectFile = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.images],
        });
        setSingleFile(res);
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <KeyboardAwareScrollView>
            <View style={styles.profileContainer}>
                <View>
                    <View style={styles.imageBox}>
                    <Image source={singleFile} style={styles.profileImage1} resizeMode="contain" />
                    </View>
                    <TouchableOpacity style={styles.editBtn} onPress={selectFile}>
                        <Image source={icons.edit} style={styles.edit} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            <Text style={styles.name}>Adom Shafi</Text>
                <Text style={styles.text}>Edit Profile</Text>
            </View>

            <View style={styles.inputBox}>
                <Text style={styles.labels}>Name</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="Adom Shafi" style={styles.inputText}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Your Email</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="hellobesnik@gmail.com" style={styles.inputText}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Password</Text>
                <TextInput
                secureTextEntry={true}
                    onChangeText={text => setText(text)}
                    defaultValue="lkjsdaijfak" style={styles.inputText}
                />
            </View>
           
            <ButtonComponent
                title={'Save Now'}
                style={styles.applyBtn}
            />
            </KeyboardAwareScrollView>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default EditProfile;