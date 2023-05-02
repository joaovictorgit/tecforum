import styled from "styled-components/native";

export const ContainerChat = styled.View`
  background: rgba(43, 44, 50, 0.8);
  display: flex;
  width: 100%;
  z-index: -1;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  height: 80px;
  background: #2b2c32;
  elevation: 5;
  shadow-color: #000;
  shadowOffset: { width: 0, height: 2 };
  shadow-opacity: 0.8;
  shadow-radius: 5;
  z-index: 1;
`;

export const ContainerHeaderChat = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const PhotoChat = styled.Image`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const ContainerBack = styled.View`
  position: absolute;
  left: 22px;
  top: 22px;
  cursor: pointer;
`;

export const ContainerNameCategory = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TextNameCategory = styled.Text`
  font-size: 1.2em;
  color: #ccc;
  font-weight: 700;
`;

export const ContainerMessages = styled.View`
  display: flex;
  width: 100%;
  height: ${(props) => props.heightWindow};
  margin-top: 10px;
`;

export const ContainerFormMessage = styled.View`
  width: 100%;
  position: absolute;
  bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const InputMessage = styled.TextInput`
  width: 75%;
  height: 36px;
  background: rgba(43, 44, 50, 0.8);
  color: rgba(255, 255, 255, 0.6);
  text-indent: 10px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #5c5959;
  margin-left: 20px;
  margin-right: 10px;
`;

export const SendMessage = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #1434a4;
`;

export const ContainerChatMessages = styled.ScrollView`
  width: 100%;
  height: 550px;
`;
