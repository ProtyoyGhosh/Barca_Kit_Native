import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    kitContainer: {
        height: "100%",
        width: "100%",
        justifyContent: 'center'
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        fontSize: 16,
        color: 'white'
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        position: 'absolute'
    }
});
export default styles;
