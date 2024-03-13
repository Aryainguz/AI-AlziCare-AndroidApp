import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const notification = () => {
  return (
<ScrollView>
    <View style={styles.container}>
      <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6Jd4DeulkLAOj5b1cMi0V9ANvVnlwvHYtw&usqp=CAU" }} style={styles.image2} />
      <View style={styles.content}>
        <Text style={styles.title}>Important</Text>
        <Text style={styles.description}>Our AI offers prognois based on voice based biomark with more than 85% accuracy, not diagnoses. Please get a physical checkup for confirmation. If prognosed, call 
        <Text style={styles.link}>
        &nbsp; 800-438-4380 &nbsp;
         </Text>
        
         for immediate care. Together, we fight on.</Text>
      </View>
    </View>
    <Text style={styles.title3}>AI Biomark Prognosis</Text>

    <View style={styles.container}>
        <Image source={require('../../assets/images/home.png')}  style={{height: wp(75), width: wp(75)}} />
    </View>
    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Prognosis</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    marginTop: 10,
    marginRight: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 155,
    borderRadius: 5,
    marginLeft: 100,
  },
  link:{
    color: '#007bff',
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container2: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,

  },
  image2:{
    width: 40,
    marginRight: 16,
    height: 40,
    margin:'auto',
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily:'mon-b',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  title2: {
    fontSize: 20,
    fontFamily:'mon-b',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  title3: {
    fontSize: 20,
    marginLeft: 16,
    fontFamily:'mon-b',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    fontFamily:'mon-sb',
    color: '#888',
  },
});

export default notification;