import React from "react";
import { ScrollView, Text, StatusBar, View } from "react-native";
import ChatBottomBar from "../../component/ChatBottomBar";
import { Date, ReceiveMessage, SendMessage, } from "../../component/ChatComponents";
import { COLORS } from "../../constants";
import styles from "./styles";

const ChatScreen = ({ navigation }) => {
    return (
       <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={COLORS.blue2} barStyle="dark-content" />
          <Date date={'February 12, 2022'} />
          <SendMessage 
            message={'Holla Jane!'}
            boxStyle={styles.messageBox}
            textStyle={styles.messageText}
            time={'17:00'} />
            <SendMessage 
            message={'A week back I started exploring UI/UX using Figma'}
            time={'17:00'} />
            <SendMessage 
            message={'And I have tried to clone WhatsApp'}
            time={'17:00'} />
            <SendMessage 
            message={'Have a look at my Figma profile, hope you will like it.'}
            time={'17:00'} />
            <SendMessage 
            link={'figma.com/@shivanshumathur'}
            message={'Do share your views'}
            time={'17:00'} />
          <ReceiveMessage 
        textStyle={styles.receiveMessage}
          message={'Wow... Sounds great!'}
          time={'17:02'}
          />
          <ReceiveMessage 
          message={'Amazing Designs'}
          time={'17:02'}
          />
             <ReceiveMessage 
          message={'It’s awsm man!!!😍'}
          time={'17:02'}
          />
        </ScrollView>
        <ChatBottomBar placeholder={'Message'}  />
       </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default ChatScreen;