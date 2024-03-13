import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Video from "react-native-video"

export const VideoPlayer = ({ route }) => {
    const [pause, setPause] = useState(false)
    // const [duration, setDuration] = useState(0)


    // const onProgress = (data) => setDuration(data.duration)
    const onPressPause = () => setPause(!pause)

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressPause}>
                {/* <Video // Constants issue
                    source={{ uri: `${route.params.url}` }}
                    pause={pause}
                    // onLoad={onLoad}
                    // onProgress={onProgress}
                    repeat
                /> */}
                <Text>{route.params.url}</Text>
            </TouchableOpacity>
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