import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../styles'

const ListItemSaga = ({name, id}) => {
    return (
        <View style={styles.center}>
            <Text style={styles.h2} >{id}. {name}</Text>
        </View>
    )
}

export default ListItemSaga
