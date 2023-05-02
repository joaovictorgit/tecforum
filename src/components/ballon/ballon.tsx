import { ContainerBallon, TextBallon } from "./ballon-style";

const Ballon = (message: any, currentUser = 32) => {
  return (
    <ContainerBallon backgroundBallon="#0000ff">
      <TextBallon textColorBallon="#fff">Olá</TextBallon>
    </ContainerBallon>
  );
};
export default Ballon;
