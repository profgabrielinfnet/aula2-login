import { useEffect, useState } from "react";
import { TextInput, Text } from "react-native";


export default function Input({ placeholder, value, setValue }) {
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const valid = value.length > 4;
        setIsValid(valid)
    })
    return (
        <>
            <TextInput
               placeholder={placeholder}
               value={value}
               onChangeText={setValue}
            />
            {
                !isValid && (
                    <Text>Campo inválido</Text>
                )
            }
        </>
    )
}