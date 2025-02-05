import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
    const router = useRouter();
    
    const handleLogin = () => {
        router.push('/protected/home');
    };

    return (
        <View>
            <Text>Pantalla de registro</Text>
            <Button title="Registro" onPress={handleLogin} />
        </View>
    );
}
