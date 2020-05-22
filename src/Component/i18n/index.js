import I18n from 'react-native-i18n';
import ReactNative from 'react-native';
import eng from '../i18n/eng';
import ch from '../i18n/ch';
I18n.fallbacks = true;
I18n.translations = {
    eng, ch
};
const currentLocale = I18n.currentLocale();        
export const isRTL = currentLocale.indexOf('eng') === 0 || currentLocale.indexOf('ch') === 0;
ReactNative.I18nManager.allowRTL(isRTL);
// I18n.locale = 'eng';
export function translate(name, params = {}) {
    return I18n.t(name, params);
  };
  export default I18n;