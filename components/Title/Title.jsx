import { StyleSheet, Text } from "react-native"

export const Title = ({ title }) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        padding: 20
    }
})