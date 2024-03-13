import { StyleSheet, View } from "react-native"
import { Title } from "../components"

export const Aboout = () => {
    return (
        <View style={styles.bottomBar}>
            <Title title="Made by Marco Rosner" />
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: 'lightgray',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
});