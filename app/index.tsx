import Input from '@/components/Input';
import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HomeScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // 1. username e senha tem que ter mais de 4 caracteres 
    // 2. password tem pelo menos uma letra maiuscula e um numero 

    const [isValid, setIsValid] = useState(false);

    const resgister = () => {
        console.log('username', username);
        console.log('password', password);
    }

    useEffect(() => {
        const valid = username.length > 4 && password.length > 4;
        setIsValid(valid)
    }, [username, password])

    return (
        <View>
            <Text>Tela de Login</Text>
            <Input 
                placeholder="Digite seu usuário"
                value={username}
                setValue={setUsername}
            />
            <Input 
                placeholder="Digite a sua senha"
                value={password}
                setValue={setPassword}
            />
            <TouchableOpacity onPress={resgister} disabled={!isValid}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}