import { StyleSheet, Text, View } from 'react-native';
export default function Footer(){
    return(
        <View>
            <Text style={styles.title}>All rights are reserved</Text>
                    </View>
                )
}


const styles=StyleSheet.create({
    title:{ 
    width: 300,
    height: 150,
    borderWidth: 2,
    borderColor: "#2563EB",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },
});