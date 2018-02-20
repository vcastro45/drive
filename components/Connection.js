import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Grid, Row } from 'native-base';

export default class Connection extends React.Component {

  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Row></Row>
            <Row>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Mot de Passe</Label>
                  <Input secureTextEntry/>
                </Item>
              </Form>
            </Row>
            <Row></Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}