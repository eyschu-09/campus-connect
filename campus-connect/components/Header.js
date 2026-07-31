import { StyleSheet, Text, View } from 'react-native';
export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Campus-Connect</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"#2563EB",
    },
    title:{
        color:"#fff",
        fontSize:24,
        fontWeight:"bold",
    },
});