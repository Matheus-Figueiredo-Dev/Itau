import {
  Button,
  Container,
  ContainerLeft,
  ContainerRight,
  Content,
  Description,
  NavButton,
  Title,
} from './styles';

import arrowExplorer from '../assets/arrow-explorer.svg';
import appleStore from '../assets/btn-apple-store.svg';
import googlePlay from '../assets/btn-google-play.svg';
import woman from '../assets/woman.png';

export function Section() {
  return (
    <Container>
      <Content>
        <ContainerLeft>
          <Title>Tenha seu Banco na palma da mão</Title>
          <Description>
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você
          </Description>
          <Button>
            <img src={appleStore} alt="logo-apple-store" />
          </Button>
          <Button>
            <img src={googlePlay} alt="logo-google-play" />
          </Button>
          <NavButton>
            <img src={arrowExplorer} alt="flecha-para-baixo" />
            <p>Continue explorando</p>
          </NavButton>
        </ContainerLeft>
        <ContainerRight>
          <img src={woman} alt="woman" />
        </ContainerRight>
      </Content>
    </Container>
  );
}
