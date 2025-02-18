import I18n from 'react-native-i18n';
import { English } from '../../constants/labels';
export const localize = (name, params = {}) => {
    I18n.fallbacks = true;
    I18n.translations = {
        en: English,
    }
    // var currentLocal = I18n.currentLocale();
    return I18n.t(name, params);
}