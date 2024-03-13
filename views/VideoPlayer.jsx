import { ResizeMode, Video } from "expo-av"
import { useRef, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

export const VideoPlayer = ({ route }) => {
    const video = useRef(null)

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={{ height: 500, width: 350 }}
                source={{ uri: `${route.params.url}` }}
                useNativeControls
                isLooping
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blacks'
    }
})