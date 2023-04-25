import Icon from "react-native-vector-icons/Ionicons";
import GridItems from "../../components/gridItems/grid";
import {
  Container,
  ContainerGridMenu,
  ContainerHeader,
  ContainerTitleGridMenu,
  ContainerTitlesHeader,
  Photo,
  SubTitleHeader,
  TitleGridMenu,
  TitleHeader,
} from "./home-style";

const HomeScreen = () => {
  return (
    <Container>
      <ContainerHeader>
        <Photo source={require("../../../assets/icon.png")} />
        <ContainerTitlesHeader>
          <TitleHeader>João Victor</TitleHeader>
          <SubTitleHeader>online</SubTitleHeader>
        </ContainerTitlesHeader>
      </ContainerHeader>
      <ContainerGridMenu>
        <ContainerTitleGridMenu>
          <Icon name="list-outline" color="rgba(181, 179, 179, 0.6)" />
          <TitleGridMenu>Categorias</TitleGridMenu>
        </ContainerTitleGridMenu>
        <GridItems />
      </ContainerGridMenu>
    </Container>
  );
};

export default HomeScreen;
