import { Text } from "react-native";
import {
  ContainerGrid,
  FooterItem,
  HeaderItem,
  Item,
  PhotoHeaderItem,
  TextFooterItem,
  TitleHeaderItem,
} from "./grid-style";
import { useNavigation } from "@react-navigation/native";

const GridItems = () => {
  const navigation = useNavigation();
  return (
    <ContainerGrid>
      <Item onPress={() => navigation.navigate("Chat")}>
        <HeaderItem>
          <PhotoHeaderItem
            source={{ uri: "https://reactnative.dev/img/logo-og.png" }}
          />
          <TitleHeaderItem>React</TitleHeaderItem>
        </HeaderItem>
        <FooterItem>
          <TextFooterItem>22 comentários</TextFooterItem>
        </FooterItem>
      </Item>
      <Item>
        <HeaderItem>
          <PhotoHeaderItem
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png",
            }}
          />
          <TitleHeaderItem>Angular</TitleHeaderItem>
        </HeaderItem>
        <FooterItem>
          <TextFooterItem>22 comentários</TextFooterItem>
        </FooterItem>
      </Item>
    </ContainerGrid>
  );
};

export default GridItems;
