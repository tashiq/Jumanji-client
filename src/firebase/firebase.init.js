import firebaseConfig from './firebase.config';
import { initializeApp } from 'firebase/app';
const initAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthentication;