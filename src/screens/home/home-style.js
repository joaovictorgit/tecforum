import styled from "styled-components/native";

export const Container = styled.View`
  background: #2b2c32;
  display: flex;
  width: 100%;
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin: 10px;
  width: 35%;
`;

export const Photo = styled.Image`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
`;

export const ContainerTitlesHeader = styled.View`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  font-size: 1em;
  font-weight: bold;
  color: #b5b3b3;
`;

export const SubTitleHeader = styled.Text`
  font-size: 0.8em;
  font-weight: bold;
  color: #5bba32;
`;

export const ContainerGridMenu = styled.View`
  margin-top: calc(20% - 10px);
  flex-direction: column;
  row-gap: 10px;
`;

export const ContainerTitleGridMenu = styled.View`
  flex-direction: row;
  column-gap: 5px;
  margin-left: 10%;
`;

export const TitleGridMenu = styled.Text`
  color: rgba(181, 179, 179, 0.6);
  font-size: 1em;
  font-weight: bold;
`;
