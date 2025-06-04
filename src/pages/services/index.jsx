import {
  Container,
  ContainerLeft,
  ContainerRight,
  Content,
  Description,
  Image,
  List,
  Menu,
  SubTitle,
  Title,
} from './styles';

import iconCard from '../../assets/icon-card.svg';
import iconOptions from '../../assets/icon-options.svg';
import iconPhone from '../../assets/icon-phone.svg';
import iconSolutions from '../../assets/icon-solutions.svg';
import phone from '../../assets/phone.png';

export function Services() {
  return (
    <Container>
      <Content>
        <ContainerLeft>
          <Title>SERVIÇOS EXCLUSIVOS</Title>
          <SubTitle>Gerencie suas finaças sem sair de casa</SubTitle>
          <Description>
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e melhor, no conforto da sua casa
          </Description>
          <List>
            <Menu>
              <img src={iconPhone} alt="icone-celular" />
              <p>
                Acompanhar sua conta, fazer transferências e pagamentos onde
                estiver
              </p>
            </Menu>
            <Menu>
              <img src={iconSolutions} alt="icone-solucao" />
              <p>
                Soluções de empréstimos e negociação para organizar suas
                finanças
              </p>
            </Menu>
            <Menu>
              <img src={iconOptions} alt="icone-opcoes" />
              <p>
                Diversas opções de investimenos, de acordo com o seu perfil de
                investidor
              </p>
            </Menu>
            <Menu>
              <img src={iconCard} alt="icone-cartao" />
              <p>
                Acompanhe a fatura do seu cartão de crédito e faça compras
                onlines com seu cartão virtual
              </p>
            </Menu>
          </List>
        </ContainerLeft>
        <ContainerRight>
          <Image src={phone} alt="celular" />
        </ContainerRight>
      </Content>
    </Container>
  );
}
