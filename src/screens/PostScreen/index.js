import React from "react";
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image } from "react-native";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

const PostScreen = ({ navigation }) => {
    return (
        <>
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <TextInput 
            placeholder="Write what’s your mind"
            placeholderTextColor={'#BFBFBF'}
            style={styles.textBox}
            numberOfLines={26}
             />

        <View style={styles.bottomBar}>
        <TextInput 
            placeholder="Add your post"
            placeholderTextColor={'#BFBFBF'}
            style={styles.inputText}
             />
             <TouchableOpacity style={styles.Btn}>
                <Image source={icons.gallery} style={styles.gallery} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.Btn}>
                <Image source={icons.map} style={styles.map} />
             </TouchableOpacity>
             <TouchableOpacity style={styles.Btn}>
                <Image source={icons.camera1} style={styles.gallery} />
             </TouchableOpacity>
        </View>
        </View>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default PostScreen;