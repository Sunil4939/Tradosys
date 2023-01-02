import React, { useState } from "react";
import { ScrollView, Text, StatusBar, TouchableOpacity, ImageBackground, View, Image } from "react-native";
import { CategoryCard, ServiceCard } from "../../component/CardComponent";
import Carousel from "../../component/Carousel";
import { COLORS, dummyData, icons, images } from "../../constants";
import styles from "./styles";
import Video from 'react-native-video';
import video from '../../assets/videos/YehDil.mp4';

const HomePage = ({ navigation }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
            <StatusBar backgroundColor={COLORS.blue2} barStyle="dark-content" />
            <View style={styles.container}>
                <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('SearchPage')}>
                    <View style={styles.micBtn}>
                        <Image source={icons.search} style={styles.searchIcon} resizeMode="contain" />
                    </View>
                    <Text style={styles.searchText}>Search for business/service near you</Text>
                    <View style={styles.micBtn}>
                        <Image source={icons.mic} style={styles.mic} resizeMode="contain" />
                    </View>
                </TouchableOpacity>
                <View style={styles.slideRow}>
                    <Image source={images.slide} style={styles.slide} resizeMode="contain" />
                    <View style={styles.row}>
                        <Image source={icons.location} style={styles.location} resizeMode="contain" />
                        <Text style={styles.locationText}>Nagpur, Maharastra India </Text>
                    </View>
                    <Image source={images.slide} style={styles.slide} resizeMode="contain" />
                </View>
                <Carousel />

                <View style={styles.categoryContainer}>
                    {dummyData.CategoryData.map((item) =>
                        <CategoryCard
                            key={item.id}
                            data={item}
                            imageStyle={item.id == 4 && styles.ads}
                        />
                    )}
                </View>
            </View>
            <View style={styles.bottomSheet}>
                <View style={styles.slideTopBox}>
                    <View style={styles.slideTop}></View>
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.moodContainer}>
                        {dummyData.MoodData.map((item) =>
                            <TouchableOpacity key={item.id} style={styles.moodImageBox}>
                                <Image source={item.image} style={styles.moodImage} resizeMode="contain" />
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
                <View style={styles.serviceContainer}>
                {dummyData.ServiceData.map((item) =>
                        <ServiceCard
                            key={item.id}
                            data={item}
                        />
                    )}
                </View>
                <ScrollView horizontal={true}>
                    <View style={styles.foodContainer}>
                        {dummyData.foodData.map((item) =>
                            <TouchableOpacity key={item.id} style={styles.foodCategory}>
                                    <View style={styles.foodImageBox}>
                                    <Image source={item.image} style={styles.foodImage} resizeMode="contain" />
                                    </View>
                                <Text style={styles.foodName}>{item.categoryName}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>

                <ImageBackground source={images.slideImage} style={styles.backgroundVideoContainer} resizeMode="stretch" >
                        <Video
                            source={video}
                            paused={!isPlaying}
                            // controls={true}      // make it start   
                            resizeMode="stretch"
                            filterEnabled={true}
                            style={styles.backgroundVideo}
                        // repeat={true}                   
                        />
                        <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)} style={styles.playBtn} >
                            <Image source={icons.play} style={styles.play} />
                        </TouchableOpacity>
                    </ImageBackground>
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default HomePage;