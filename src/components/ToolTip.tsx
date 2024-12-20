import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ToolTipProps } from '@/types'
import { TouchableOpacity } from 'react-native'

export const ToolTip: React.FC<ToolTipProps> = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.container} >
            <TouchableOpacity
                onPressIn={() => setIsVisible(true)}
                onPressOut={() => setIsVisible(false)}
            ><Text style={styles.toolTipText}>{children}</Text>
                {isVisible && <Text style={{ color: "red" }}>{text}</Text>}

            </TouchableOpacity>
        </View>
    )
}


export const ToolTipTwo: React.FC<ToolTipProps> = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <View >
            <Pressable
                onPressIn={() => setIsVisible(true)}
                onPressOut={() => setIsVisible(false)}
            >{children}
                {isVisible && <Text>{text}</Text>}
            </Pressable>
        </View >
    )

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 7,
        width: 150,


    },
    toolTipText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: 'capitalize',
    }

})