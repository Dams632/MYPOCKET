import {View,Text} from "react-native"
import {  Category } from "../types/categorias"
import { theme } from "../themes/inex"



export const CategoriasRow = ({color,name}:Omit<Category,'id'>) => (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start' ,
        padding: 20,
        borderBottomColor: theme.colors.border,
        borderBottomWidth: 1,
        backgroundColor: theme.colors.card,
        width: '100%'
    }}>
    <View style={{
        backgroundColor: color,
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'white',
    }}/>
    <Text style={{
        color:'white',
        fontSize:18,
        marginLeft: 8,

    }}>{name}</Text>

    </View>

)