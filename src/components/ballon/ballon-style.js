import styled from "styled-components/native";

export const ContainerBallon = styled.View`
  background: ${(props) => props.backgroundBallon};
  border-radius: 20px;
`;

export const TextBallon = styled.Text`
  color: ${(props) => props.textColorBallon};
  font-size: 1em;
  font-weight: 400;
  padding: 5px;
`;
