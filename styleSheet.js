import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    results: {
        backgroundColor: 'white',
        maxWidth: '100%',
        minHeight: '31%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    history: {
        backgroundColor: 'white',
        maxWidth: '100%',
        minHeight: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttons: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        borderColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '24%',
        minHeight: '54%',
        flex: 2,
        borderWidth: 1,
        borderRadius: 5
    },
    textButton: {
        color: '#7c7c7c',
        fontSize: 28,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button1: {
        paddingHorizontal: 9,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        backgroundColor: "#FF6666",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "#FF6666",
    },
    selectedLabel: {
        color: "white",
    },
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        height: 45,
        borderRadius: 10,
        backgroundColor: "#D8D8D8",
    },
    input: {
        fontSize: 30,
        marginLeft: 10,
        width: "90%",
    },
})
export default styles