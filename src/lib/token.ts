//import { DefaultLoginTime, TokenKey } from "../constants";
import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants';

export function setWithExpiry(key: string, value: string, ttl: number) {
  const now = new Date();
  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };

  // Encrypt the item object before storing
  const encryptedItem = CryptoJS.AES.encrypt(
    JSON.stringify(item),
    SECRET_KEY
  ).toString();

  localStorage.setItem(key, encryptedItem);
}

export function getWithExpiry(key: string) {
  const encryptedItemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!encryptedItemStr) {
    return null;
  }

  try {
    // Decrypt the encrypted string
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedItemStr, SECRET_KEY);
    const decryptedItemStr = decryptedBytes.toString(CryptoJS.enc.Utf8);

    // Parse the decrypted JSON string
    const item = JSON.parse(decryptedItemStr);
    const now = new Date();

    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return null;
    }

    //setWithExpiry(TokenKey, item.value, DefaultLoginTime);
    return item.value;
  } catch (error) {
    // If decryption fails, remove the corrupted item and return null
    localStorage.removeItem(key);
    return null;
  }
}
