import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
    marginRight: 11,
    height: 20,
    tintColor: colors.white,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
});
