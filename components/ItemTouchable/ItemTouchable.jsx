import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native"

export const ItemTouchable = ({ item, navigation }) => {
    const onPress = () => {
        // Alert.alert("You pressed ", item.key)
        navigation.navigate('VideoPlayer', { url: item.url })
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.item}>{`${item.key}`}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 16,
        height: 50
    }
});