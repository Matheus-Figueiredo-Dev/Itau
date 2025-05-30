import {
  Button,
  ContainerButton,
  ContainerImage,
  Content,
  HeaderContainer,
  Image,
  Menu,
  Nav,
} from './styles';

import icon from '../../assets/icon-user.svg';
import logo from '../../assets/logo.svg';
import ItemMenu from '../ItemMenu';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <ContainerImage>
          <Image src={logo} alt="Logo Itaú" />
        </ContainerImage>
        <Nav>
          <Menu>
            <ItemMenu name="Para você" />
            <ItemMenu name="Para empresas" />
            <ItemMenu name="Serviço" />
            <ItemMenu name="Ajuda" />
          </Menu>
        </Nav>
        <ContainerButton>
          <Button>
            <img src={icon} alt="Icone de usuario" />
            <span>Acessar conta</span>
          </Button>
        </ContainerButton>
      </Content>
    </HeaderContainer>
  );
}
