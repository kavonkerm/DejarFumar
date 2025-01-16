import { firebase } from '@react-native-firebase/app';

// Aquí va tu configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: 'AIzaSyAjIkBKVivQo-rthusd3ajkctSceSMkf8c',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'app-nosmoking',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'Y1:571745550303:android:3139d60817151460160e6a',
  measurementId: 'YOUR_MEASUREMENT_ID',
};

// Verificar si ya está inicializado Firebase, si no, inicializarlo
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Si ya está inicializado
}

export { firebase };
