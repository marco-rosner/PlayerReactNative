import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export const ItemTouchable = ({ item, navigation }) => {
    const onPress = () => {
        navigation.navigate('Video Player', { url: item.url })
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.description}>{item.desc}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        padding: 10,
        borderColor: 'lightgray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'baseline'
    },
    item: {
        fontSize: 18,
        height: 30
    },
    description: {
        fontSize: 14,
        height: 30,
        color: 'gray'
    }
});