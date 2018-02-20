import React from 'react';
import { } from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class ixatHeader extends React.Component {

  render() {
    return (
	<Header>
		<Left>
		<Button transparent>
			<Icon name='menu' />
		</Button>
		</Left>
		<Body>
		<Title>ixaT</Title>
		</Body>
		<Right />
	</Header>
    );
  }
}