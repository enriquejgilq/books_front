import React from 'react';
import { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthContext } from './AuthContext';
import { Redirect } from 'expo-router';
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        'black': require('../../assets/fonts/Poppins/Poppins-Black.ttf'),
        'italic': require('../../assets/fonts/Poppins/Poppins-Italic.ttf'),
        'regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    });
    if (!fontsLoaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated ? <Redirect href="/protected/home" /> : <Redirect href="/auth/login" />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        fontFamily: 'regular',
    },
});
