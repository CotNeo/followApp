import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    navbar: {
        backgroundColor: '#FF0000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F2F2F2',
    },
    footer: {
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
    },
    footerText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
});
