import React from "react";
import { Actions } from "react-native-router-flux";
import Button from "../components/Button";
import Row from "../components/Row";
import Column from "../components/Column";
import Container from "../components/Container";
import Divider from "../components/Divider";
import TextInput from "../components/TextInput";
import {
  SmallText,
  RegularText,
  BigText,
  ExtraBigText
} from "../components/Text";
import { colors } from "../styles";

const Login = props => {
  return (
    <Container>
      <Column minHeight='30%'>
        <ExtraBigText>Marviz</ExtraBigText>
      </Column>
      <Divider height="4" />
      <TextInput placeholder="Login" />
      <TextInput placeholder="Senha" />
      <Divider height="2" />
      <Row align="center" justify="space-between">
        <Button>
          <BigText>Entrar</BigText>
        </Button>
        <Button onPress={Actions.register}>
          <BigText>Registre-se</BigText>
        </Button>
      </Row>
      <Divider height="2" />
    </Container>
  );
};

export default Login;
