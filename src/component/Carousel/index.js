
import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { icons, COLORS, dummyData, } from '../../constants';
const { width, height } = Dimensions.get('window')

const Slides = ({ navigation, CarouselItem }) => {

    return (
        <View style={styles.imageContainer}>
            <Image source={CarouselItem.image} style={styles.image} resizeMode="stretch" />
        </View>

    )
}

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};




const Carousel = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);
    const data = dummyData.CarouselData;


    useInterval(() => {
        goNextSlide();
        if (currentSlideIndex == 2) {
            ref?.current?.scrollToOffset(0);
            setCurrentSlideIndex(0);
        }
    }, 2000);

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    }

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width * .94 ;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    }

    return (
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Slides navigation={navigation} CarouselItem={item} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                pagingEnabled
                bounces={false}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                ref={ref}
            />
    );
}


export default Carousel;

const styles = StyleSheet.create({
  
    image: {
        width: width * .94,
        height: height * .22,
        borderRadius: 20,
    },
    imageContainer:{
        width: width * .94 ,
        height: height * .22,
        alignItems:'center',
    },

})


