import { StyleSheet } from 'react-native';
import StyleVars from 'socialApp/StyleVars';

export default StyleSheet.create ({
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: StyleVars.Colors.mediumBackground
  },
  headingText: {
    color: StyleVars.Colors.primaryText,
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: "600"
  },
  text: {
    color: StyleVars.Colors.primaryText,
    fontFamily: 'Avenir',
    fontSize: 12,
    fontWeight: "400"
  },
  navBarTitleText: {
    color: StyleVars.Colors.navBarTitle,
    fontFamily: 'Avenir',
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 22
  }
});
