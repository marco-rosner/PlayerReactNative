import { FlatList, StyleSheet, View } from "react-native"
import { ItemTouchable } from "../components"
import { videos } from "../videos";

export const VideoList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={videos}
                renderItem={({ item }) => <ItemTouchable item={item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%'
    }
});