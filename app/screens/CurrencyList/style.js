import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export default StyleSheet.create({
  conatiner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 10,
  },
  selectContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  selectImage: {
    width: 15,
    height: 15,
    tintColor: colors.white,
  },
});
