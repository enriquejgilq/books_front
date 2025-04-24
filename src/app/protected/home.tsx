import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function HomeScreen() {
  
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Bienvenido a Home1</Text>
      <Button title="Cerrar sesión" onPress={signOut} />
    </View>
  );
}
