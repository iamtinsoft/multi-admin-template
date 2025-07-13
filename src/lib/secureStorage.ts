/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';
import { SECRET_KEY } from '../constants';


export const secureStorage = {
    setItem: (key: any, value: any) => {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(value), SECRET_KEY).toString();
        localStorage.setItem(key, encrypted);
    },
    getItem: (key: any) => {
        const encrypted = localStorage.getItem(key);
        if (!encrypted) return null;

        try {
            const decrypted = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
            return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    },
    removeItem: (key: any) => {
        localStorage.removeItem(key);
    },
};
