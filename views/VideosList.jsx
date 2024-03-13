import { FlatList, ScrollView, StyleSheet, View } from "react-native"
import { ItemTouchable, Title } from "../components"

const videos = [{ key: 'Rabbit', url: '/assets/rabbit320.mp4' }, { key: 'Rabbit 2', url: '/assets/Rabbit2.mp4' }]

export const VideoList = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title title="Videos List" />
            <FlatList
                data={videos}
                renderItem={({ item }) => <ItemTouchable key={item.key} item={item} navigation={navigation} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingTop: 30,
        marginBottom: 150,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});