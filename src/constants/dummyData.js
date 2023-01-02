import icons from "./icons";
import images from "./images"


const CarouselData = [
    {
        id:1,
        image: images.slideImage,
    },
    {
        id:2,
        image: images.slideImage,
    },
    {
        id:3,
        image: images.slideImage,
    },
    {
        id:4,
        image: images.slideImage,
    },
    {
        id:5,
        image: images.slideImage,
    },
   
];

const CategoryData = [
    {
        id:1,
        image: images.factory,
        categoryName: 'Campanies & Factories',
    },
    {
        id:2,
        image: images.software,
        categoryName: 'Software Companies',
    },
    {
        id:3,
        image: images.shop,
        categoryName: 'Shops,Store and outlets',
    },
    {
        id:4,
        image: images.ads,
        categoryName: 'Advertising Agencies',
    },
    {
        id:5,
        image: images.harvest,
        categoryName: 'Agricultureal Products',
    },
    {
        id:6,
        image: images.dress,
        categoryName: '  Fashion Company',
    },
    {
        id:7,
        image: images.transportation,
        categoryName: 'Transport Services',
    },
    {
        id:8,
        image: images.factory,
        categoryName: '  Fashion Company',
    },
];

const MoodData = [
    {
        id:1,
        image: images.girl_like_you,
    },
    {
        id:2,
        image: images.Romence,
    },
    {
        id:3,
        image: images.yalgaar,
    },
    {
        id:4,
        image: images.falling,
    },
  
   
];

const ServiceData = [
    {
        id:1,
        image: images.new_arrivals,
        serviceName:'New Arrivals',
        color:'#FEF3DF',
    },
    {
        id:2,
        image: images.fashion_designer,
        serviceName:'Trending service',
        color:'#F4F1FF',
    },
    {
        id:3,
        image: images.planting,
        serviceName:'Agriculture',
        color:'#E0F6FF',
    },
    {
        id:4,
        image: images.property,
        serviceName:'Best in Property',
        color:'#FCE6C5',
    },
  
   
];

const foodData = [
    {
        id:1,
        image: images.vegetable,
        categoryName:'Vegetables',
    },
    {
        id:2,
        image: images.fruit,
        categoryName:'Fruits',
    },
    {
        id:3,
        image: images.meat,
        categoryName:'Meat',
    },
    {
        id:4,
        image: images.drinks,
        categoryName:'Drinks',
    },
    {
        id:5,
        image: images.bakery,
        categoryName:'Bakery',
    },
   
];

const ProductData = [
    {
        id:1,
        title:'Life Adventure Travelers -Adventure',
        rating:'4.5',
        location:'Medical store sakete nagar',
        distance:"5.3 km",
        image: images.mobile_cover,
    },
    {
        id:2,
        title:'Life Adventure Travelers -Adventure',
        rating:'4.5',
        location:'Medical store sakete nagar',
        distance:"5.3 km",
        image: images.mobile_cover,
    },
    {
        id:3,
        title:'Life Adventure Travelers -Adventure',
        rating:'4.5',
        location:'Medical store sakete nagar',
        distance:"5.3 km",
        image: images.mobile_cover,
    },
]

const NotificationData = [
    {
        id: 1,
        profile:images.notification1,
        status: 'Online',
        name: 'Roger Hulg',
        message: 'Hey, can i ask something? i need your help please',
        time:'15 min',
        totalNotification: 4,
    },
    {
        id: 2,
        profile:images.notification2,
        status: 'Offline',
        name: 'Hilman Nuris',
        message: 'thank’s for your information dude!',
        time:'Yesterday',
    },
    {
        id: 3,
        profile:images.notification3,
        status: 'Online',
        name: 'Erick Lawrence',
        message: 'Did you take the free illustration class yesterday?',
        time:'Yesterday',
        totalNotification: 1,
    },
    {
        id: 4,
        profile:images.notification4,
        status: 'Online',
        name: 'Jennifer Dunn',
        message: 'Hey Samuel, where did you get your point? can we exchange?',
        time:'2 week ago',
        totalNotification: 2,
    },
    {
        id: 5,
        profile:images.notification5,
        status: 'Offline',
        name: 'Andy Warhol',
        message: 'that’s true bro, hahaha',
        time:'14/08/20',
        totalNotification: 1,
    },
]
const ProductPhotos = [
    {
        id:1,
        image: images.product1,
    },
    {
        id:2,
        image: images.product2,
    },
    {
        id:3,
        image: images.product1,
    },
    {
        id:4,
        image: images.product2,
    },
  
   
];

const ProductInfo = [
    {
        id:1,
        ProductName:'Product 1',
        image: images.carImage,
    },
    {
        id:2,
        ProductName:'Product 2',
        image: images.carImage,
    },
    
]

const DoctorData = [
    {
        id:1,
        title:'My Doctor',
        icon: icons.doctor1,
    },
    {
        id:2,
        title:'Ayurved Docter',
        icon: icons.doctor2,
    },
    {
        id:3,
        title:'Heart Docter',
        icon: icons.doctor3,
    },
    {
        id:4,
        title:'Joints & pine Doctor',
        icon: icons.doctor1,
    },
    {
        id:5,
        title:'My Doctor',
        icon: icons.doctor1,
    },
    {
        id:6,
        title:'Ayurved Docter',
        icon: icons.doctor2,
    },
    {
        id:7,
        title:'Heart Docter',
        icon: icons.doctor3,
    },
    {
        id:8,
        title:'Joints & pine Doctor',
        icon: icons.doctor1,
    },
    {
        id:9,
        title:'Ayurved Docter',
        icon: icons.doctor2,
    },
    {
        id:10,
        title:'Heart Docter',
        icon: icons.doctor3,
    },
    {
        id:11,
        title:'Joints & pine Doctor',
        icon: icons.doctor1,
    },
]

export default {
    CarouselData,
    CategoryData,
    MoodData,
    ServiceData,
    foodData,
    ProductData,
    NotificationData,
    ProductPhotos,
    ProductInfo,
    DoctorData,
}