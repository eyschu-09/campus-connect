import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import{Ionicons,MaterialIcons} from "@expo/vector-icons";
//https://jsonplaceholder.typicode.com/posts
export default function NoticeCard() {
  const [data,setData]=useState([])
  useEffect(()=>{
  const notices = [
    {
      id: 1,
      title: "React Native Workshop",
      date: "30 July",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
    {
      id: 2,
      title: "Hackathon",
      date: "2 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJiL2savWoGa11xgA0dE_0XjhbdeZokBLo_dScmZJKg&s=10"
    },
    {
      id: 3,
      title: "Placement Drive",
      date: "10 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
    {
      id: 4,
      title: "Seminar",
      date: "12 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
    {
      id: 5,
      title: "Sports Day",
      date: "15 August",
    },
    {
      id: 6,
      title: "Cultural Fest",
      date: "20 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
    {
      id: 7,
      title: "Tech Talk",
      date: "25 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
    {
      id: 8,
      title: "Quiz Competition",
      date: "28 August",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8C191JdCh-vLaAF570ZX04NesIpQl7WQUtRcl0pkDuw&s=10"
    },
  ];
},[]);
 setData(notices);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      
      renderItem={({ item }) => (
        <View style={styles.card}>
            {item.image &&(
                <Image
                source={{uri:item.image}}
                style={styles.image}/>
            )}
            <Ionicons 
            name="home"
            size={40}
            color="white"/>
          
            <MaterialIcons
            name="school"
            size={40}
            color="green"/>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>

          <Text style={styles.image}>{item.duck}</Text>
            <Ionicons 
            name="calendar"
            size={40}
            color="white"/>
          
        </View>
      )}
      ListFooterComponent={
        <Image
          source={require("../assets/sun.jpg")}
          style={styles.image}/>
      }
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 20,
  },

  card: {
    backgroundColor: "#D2691E",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 15,
    
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  date: {
    marginTop: 5,
    color: "white",
  },
  dateContainer:{
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:15,
  }
});
