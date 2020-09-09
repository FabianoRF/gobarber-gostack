import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const vare = 0;

  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={Lock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="button">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="criarconta">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
