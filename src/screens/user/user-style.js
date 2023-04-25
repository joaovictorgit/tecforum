import styled from "styled-components/native";

export const ContainerUser = styled.View`
  background: #2b2c32;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerBack = styled.View`
  position: absolute;
  left: 22px;
  top: 22px;
  cursor: pointer;
`;

export const ContainerPhoto = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const PhotoUser = styled.Image`
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50%;
`;

export const ContainerIconPhotoUser = styled.View`
  z-index: 1;
  width: 30px;
  height: 30px;
  background: #fff;
  border: none;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-left: calc(70%);
  margin-top: calc(-30%);
  cursor: pointer;
`;

export const ContainerFormUser = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin-top: 50px;
`;

export const ContainerTitleForm = styled.View`
  text-align: start;
  margin-top: 10px;
`;

export const TitleForm = styled.Text`
  font-weight: 800;
  color: #c8c8c8;
  width: 268px;
`;

export const Input = styled.TextInput`
  width: 268px;
  height: 36px;
  background: #5c5959;
  color: rgba(255, 255, 255, 0.6);
  text-indent: 10px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ContainerButtonsForm = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonForm = styled.TouchableOpacity`
  width: 128px;
  height: 40px;
  background: ${(props) => props.backgroundButton};
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
`;

export const TextButtonForm = styled.Text`
  font-size: 1em;
  color: #fff;
  font-weight: 700;
`;
