import Icon from "react-native-vector-icons/Ionicons";
import {
  ContainerBack,
  ContainerChat,
  ContainerChatMessages,
  ContainerFormMessage,
  ContainerHeader,
  ContainerHeaderChat,
  ContainerMessages,
  ContainerNameCategory,
  InputMessage,
  PhotoChat,
  SendMessage,
  TextNameCategory,
} from "./chat-style";
import { useState } from "react";
import { Dimensions } from "react-native";
import Ballon from "../../components/ballon/ballon";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const heightWindow =
    JSON.stringify(Dimensions.get("window").height - 120) + "px";
  return (
    <ContainerChat>
      <ContainerHeader>
        <ContainerBack>
          <Icon
            name="chevron-back-outline"
            size={25}
            color="#fff"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </ContainerBack>
        <ContainerNameCategory>
          <TextNameCategory>React</TextNameCategory>
        </ContainerNameCategory>
        <ContainerHeaderChat
          onPress={() => {
            navigation.navigate("User");
          }}
        >
          <PhotoChat
            source={{
              uri: "https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg",
            }}
          />
        </ContainerHeaderChat>
      </ContainerHeader>
      <ContainerMessages heightWindow={heightWindow}>
        <ContainerChatMessages>
          <Ballon />
        </ContainerChatMessages>
        <ContainerFormMessage>
          <InputMessage
            placeholder="Digite seu texto"
            value={message}
            onChangeText={(text: any) => setMessage(text)}
          />
          <SendMessage>
            <Icon name="send-outline" color="#fff" size={20} />
          </SendMessage>
        </ContainerFormMessage>
      </ContainerMessages>
    </ContainerChat>
  );
};

export default ChatScreen;
