import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';

import Styles from '../styles/Styles';
import MainMenu from '../components/MainMenu';

import menuIcon from '../images/menu.png';
import messagesIcon from '../images/messages.png';
import holonsIcon from '../images/holons.png';
import background from '../images/blue_background.png';


function Main(props) {
  return (
    <Drawer
      open={props.isDrawerOpen}
      content={
        <MainMenu
          onClosed={() => props.onClosed()}
          onItemClicked={screen => props.onItemClicked(screen)}
        />
      }
    >
      <Image
        source={background}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
      >
        {props.children}
        <View style={Styles.topBar}>
          <TouchableHighlight onPress={() => props.onOpen()}>
            <View>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                source={menuIcon}
                style={Styles.menuButton}
                onPress={() => props.onOpen()}
              />
            </View>
          </TouchableHighlight>
          <Text style={Styles.title}>{props.title}</Text>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={messagesIcon}
            style={Styles.chatButton}
            onPress={() => props.onOpen()}
          />
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            source={holonsIcon}
            style={Styles.holonsButton}
            onPress={() => props.onOpen()}
          />
        </View>
      </Image>
    </Drawer >
  );
}

Main.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onClosed: PropTypes.func.isRequired,
  onItemClicked: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
