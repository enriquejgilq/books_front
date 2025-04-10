import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export default function HomeScreen() {
  
  const { signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Bienvenido a Hom1e</Text>
      <Button title="Cerrar sesión" onPress={signOut} />
    </View>
  );
}
