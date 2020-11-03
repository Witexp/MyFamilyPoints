import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    activityIndikator: {
        padding: 20,
    }
    ,
    parent:{
        flex:1,
    },
    header: {
        flex: 1,
    },
    containerAbout:{
        padding: 40    
    },
    centerChild:{
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginVertical: 10,
        
    },
    h1: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    h2: {
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 10,
    },
    textInput:{
        width: '70%',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    },
    inputView: {
        flexDirection: 'row',
        width: '80%'
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
    },
    pointvaluebox:{
        flexDirection: 'row', 
        marginHorizontal: 10, 
        paddingHorizontal: 10,
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    pointvalue: {
        marginLeft:10, 
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1 
    }
})
