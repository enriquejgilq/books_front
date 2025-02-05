import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = () => {
    signIn();
    router.push('/protected/home');
  };

  const handleRegister = () => {
    router.push('/auth/register');
  };
  const handleForgot = () => {
    router.push('/auth/forgot');
  };


  return (
    <View>
      <Text>Pantalla de Login</Text>
      <Button title="Olvido de contraseña" onPress={handleForgot} />
      <Button title="Registro" onPress={handleRegister} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}
