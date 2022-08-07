import {themes} from '../assets/theme';
import {useSelector} from 'react-redux';

const handleTheme = () => {
  const {themeReducer} = useSelector(e => e);
  return themes[themeReducer.mode];
};
export default handleTheme;
