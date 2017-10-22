import { AsyncStorage } from 'react-native';

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch(e) {
    console.log(e);
  }

};

export default saveToken;