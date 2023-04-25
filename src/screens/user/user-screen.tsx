import { useState } from "react";
import {
  ButtonForm,
  ContainerBack,
  ContainerButtonsForm,
  ContainerFormUser,
  ContainerIconPhotoUser,
  ContainerPhoto,
  ContainerTitleForm,
  ContainerUser,
  Input,
  PhotoUser,
  TextButtonForm,
  TitleForm,
} from "./user-style";
import Icon from "react-native-vector-icons/Ionicons";

const UserScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <ContainerUser>
      <ContainerBack>
        <Icon name="chevron-back-outline" size={25} color="#fff" />
      </ContainerBack>
      <ContainerPhoto>
        <PhotoUser
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg",
          }}
        />
        <ContainerIconPhotoUser>
          <Icon
            name="add-outline"
            size={20}
            color="rgba(0,0,0,0.54)"
            style={{ fontWeight: "bold" }}
          />
        </ContainerIconPhotoUser>
      </ContainerPhoto>
      <ContainerFormUser>
        <ContainerTitleForm>
          <TitleForm>Nome:</TitleForm>
        </ContainerTitleForm>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={(text: any) => setName(text)}
        />
        <ContainerTitleForm>
          <TitleForm>Email:</TitleForm>
        </ContainerTitleForm>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(text: any) => setEmail(text)}
        />
        <ContainerTitleForm>
          <TitleForm>Senha:</TitleForm>
        </ContainerTitleForm>
        <Input
          placeholder="Senha"
          value={pass}
          onChangeText={(text: any) => setPass(text)}
          secureTextEntry={true}
        />
        <ContainerButtonsForm>
          <ButtonForm backgroundButton="rgba(228, 155, 15, .9)">
            <TextButtonForm>Editar</TextButtonForm>
          </ButtonForm>
          <ButtonForm backgroundButton="#C70000">
            <TextButtonForm>Deletar</TextButtonForm>
          </ButtonForm>
        </ContainerButtonsForm>
      </ContainerFormUser>
    </ContainerUser>
  );
};

export default UserScreen;
