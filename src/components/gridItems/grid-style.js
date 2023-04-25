import styled from "styled-components/native";

export const ContainerGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px;
  justify-content: center;
`;

export const Item = styled.TouchableOpacity`
  background: #212121;
  width: 136px;
  height: 125px;
  border-radius: 15px;
  flex-direction: column;
  row-gap: 10px;
`;

export const HeaderItem = styled.View`
  flex-direction: row;
  column-gap: 10px;
  margin: 10px;
`;

export const PhotoHeaderItem = styled.Image`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
`;

export const TitleHeaderItem = styled.Text`
  font-size: 0.7em;
  font-weight: 700;
  color: #878484;
  margin-top: 5px;
`;

export const FooterItem = styled.View`
  width: 100%;
  position: absolute;
  bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextFooterItem = styled.Text`
  font-size: 0.6em;
  font-weight: 700;
  color: #878484;
`;
