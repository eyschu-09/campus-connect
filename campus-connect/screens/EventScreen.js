import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

export default function EventScreen() {
  const events = [
    {
      id: "1",
      title: "React Native Workshop",
      date: "05 Aug 2026",
      venue: "Seminar Hall",
    },
    {
      id: "2",
      title: "AI Seminar",
      date: "10 Aug 2026",
      venue: "Auditorium",
    },
    {
      id: "3",
      title: "Blockchain Bootcamp",
      date: "15 Aug 2026",
      venue: "Conference Hall",
    },
    {
      id: "4",
      title: "Python Programming",
      date: "18 Aug 2026",
      venue: "Lab 1",
    },
    {
      id: "5",
      title: "Hackathon 2026",
      date: "25 Aug 2026",
      venue: "Innovation Center",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  function handleSearch(text) {
    setSearch(text);

    if (text === "") {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );

      setFilteredEvents(filtered);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Events</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Search events..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Venue: {item.venue}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.noData}>No events found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F5F5F5",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  card: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  noData: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});