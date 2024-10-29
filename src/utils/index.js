import AsyncStorage from '@react-native-async-storage/async-storage';
const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
const removeData = async storageKey => {
  try {
    await AsyncStorage.removeItem(storageKey);
  } catch (e) {
    // error reading value
  }
};

/**
 * Nested Object or Array data value retriever
 * @param source
 * @param variables {string}
 * @param fallbackValue {any}
 * @param allowNull
 * @returns {any|boolean|string}
 */
const getValues = (
  source,
  variables = '',
  fallbackValue,
  allowNull = false,
) => {
  const targetValueHierarchy = (variables || '')
    .toString()
    .replace(/[[\]]/g, '.')
    .split('.')
    .filter(key => key !== '');

  if (source === null && allowNull && targetValueHierarchy.length === 0) {
    return null;
  }

  // Check for string type because string is subtype of Array
  // Don't worry, if the data type not an object or array will fail after that.
  if (!source || ['string, boolean'].includes(typeof source)) {
    return fallbackValue;
  }

  // Retain data type cause data type is dynamic
  let result = Object.assign(source);

  for (let i = 0; i < targetValueHierarchy.length; i++) {
    result = result[targetValueHierarchy[i]];

    if (result === undefined) {
      break;
    }

    if (result === null && i !== targetValueHierarchy.length - 1) {
      result = undefined;
      break;
    }
  }

  if (result === null) {
    return allowNull ? result : fallbackValue;
  }

  return result !== undefined ? result : fallbackValue;
};

const formatCurrency = price => {
  if (!price || !Number(price)) return '0đ';
  return price.toLocaleString('vi', {style: 'currency', currency: 'VND'});
};

const Utils = {
  storeData,
  getData,
  removeData,
  getValues,
  formatCurrency,
};
export default Utils;
