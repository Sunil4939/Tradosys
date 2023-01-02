import React, { useState } from "react";
import { ScrollView, Text, StatusBar, Image, View, TextInput, TouchableOpacity } from "react-native";
import { COLORS, icons, images } from "../../constants";
import DocumentPicker from 'react-native-document-picker';
import styles from "./styles";
import { ButtonComponent } from "../../component/ButtonComponent";

const AddProduct = ({ navigation }) => {
    const [text, setText] = useState('');
    const [singleFile, setSingleFile] = useState(images.carImage);
    const [checked, setChecked] = useState(false);
    const selectFile = async () => {

        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        setSingleFile(res);
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.inputBox}>
                <Text style={styles.labels}>product/service Name</Text>
                <TextInput
                    onChangeText={text => setText(text)}
                    defaultValue="Dona machine single die electiric" style={styles.inputText}
                />
            </View>
            <View style={styles.inputBox}>
                <Text style={styles.labels}>Product Image</Text>
                <Text style={styles.uploadText}>Upload Here</Text>
                <TouchableOpacity style={styles.docoumentBox} onPress={selectFile}>
                    <View style={styles.row1}>
                        <Image style={styles.upload} source={icons.upload} resizeMode="contain" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.imgContainer}>
                <View style={styles.imageContent}>
                    <View style={styles.imgBox}>
                        <Image style={styles.imageStyle} source={singleFile}  resizeMode="contain" />
                    </View>
                    <Text style={styles.name}>Baleno</Text>
                </View>
                <TouchableOpacity style={styles.deleteBtn}>
                    <Text style={styles.deleteText}>DELETE</Text>
                </TouchableOpacity>
            </View>


            <ButtonComponent title="Continue"
                style={styles.Btn} />
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default AddProduct;