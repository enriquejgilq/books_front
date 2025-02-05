import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ForgotScreen() {
  const router = useRouter();
  const handleForgot = () => {
    alert('Revise su correo para restablecer su contraseña');
  };

  return (
    <View>
      <Text>Pantalla de olvido de contraseña</Text>
      <Button title="restablecer contraseña" onPress={handleForgot} />
      <Button title="Volver a inicio" onPress={() => router.push('/auth/login')} />
    </View>
  );
}
