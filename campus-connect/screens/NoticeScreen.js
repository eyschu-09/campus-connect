import { View,Text } from "react-native";
import {useEffect} from "react";
import { FlatList } from "react-native-web";
import {ActivityIndicator}from "react-native";
export default function NoticeScreen(){
    const[loading,setLoading]=useState(true)
    const[notices,setNotices]=useState([])
    useEffect(()=>{
   fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    setNotices(data.slice(0,10));
})
  .catch((error)=>{
    console.log(error)
  })
  setLoading(false)
  if(loading){
    return(
        <ActivityIndicator>
            size="large"
            color="blue"
        </ActivityIndicator>
    )
  }
  },[]);
    return(
          <View>
            <Text>
              campus-notices
            </Text>
            <FlatList
             data={notices}
             keyExtractor={(item)=>item.id.toString()}
             renderItem={({item})=>{
                <View>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                </View>
             }}
             />
          </View>
    )
}