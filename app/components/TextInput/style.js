import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    marginVertical: 11,
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 20,
    paddingHorizontal: 16,
    color: colors.primary,
  },
  border: {
    height: INPUT_HEIGHT,
    width: 1,
    backgroundColor: colors.homeBackground,
  },
  input: {height: INPUT_HEIGHT, flex: 1, paddingHorizontal: BORDER_RADIUS * 2},
});
