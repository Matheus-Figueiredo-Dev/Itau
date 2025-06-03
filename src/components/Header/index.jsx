import {
  Button,
  ContainerButton,
  ContainerItems,
  Content,
  HeaderContainer,
  Image,
  Menu,
} from './styles';

import icon from '../../assets/icon-user.svg';
import logo from '../../assets/logo.svg';
import ItemMenu from '../ItemMenu';

export function Header() {
  return (
    <HeaderContainer>
      <Content>
        <ContainerItems>
          <Image src={logo} alt="Logo Itaú" />
          <Menu>
            <ItemMenu name="Para você" />
            <ItemMenu name="Para empresas" />
            <ItemMenu name="Serviço" />
            <ItemMenu name="Ajuda" />
          </Menu>
          <ContainerButton>
            <Button>
              <img src={icon} alt="Icone de usuario" />
              <span>Acessar conta</span>
            </Button>
          </ContainerButton>
        </ContainerItems>
      </Content>
    </HeaderContainer>
  );
}
