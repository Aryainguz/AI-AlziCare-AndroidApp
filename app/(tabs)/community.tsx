import { TouchableOpacity } from '@gorhom/bottom-sheet';
import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image }) => {

  const openLink = (url:any) => {
    Linking.openURL(url);
  };

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
      <Image source={{ uri: "https://uxwing.com/wp-content/themes/uxwing/download/relationship-love/heart-care-icon.png" }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Communities</Text>
        <Text style={styles.description}>Explore care communities around you.</Text>
      </View>
    </View>
    <View style={styles.container2}>
      
      <View style={styles.content}>
      <Image source={{ uri: "https://ardsikolkata.org/wp-content/uploads/2022/07/slider3.jpg" }} style={styles.image2}  />

        <Text style={styles.title2}>(ARDSI) Calcutta Chapter</Text>
        <Text style={styles.description}>Alzheimer’s And Related Disorders Society of India (ARDSI) Calcutta Chapter is a registered NGO (S. Regtn No – SO098648) under the West Bengal Societies Registration Act. This organization provides care and support for people living with Dementia and their caregivers.</Text>
        <TouchableOpacity style={styles.button} onPress={() => openLink("https://ardsikolkata.org/")}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
      
    </View>


    <View style={styles.container2}>
      
      <View style={styles.content}>
      <Image source={{ uri: "https://findahelpline.com/_next/image?url=%2Fillustrations%2Fperson-sheltering-sad-woman-from-rain.png&w=1920&q=75" }} style={styles.image2}  />

        <Text style={styles.title2}>Find A Helpline</Text>
        <Text style={styles.description}>Free, confidential support from a helpline or hotline near you. Online chat, text or phone.</Text>
        <TouchableOpacity style={styles.button} onPress={() => openLink("https://findahelpline.com/organizations/alzheimer-s-related-disorders-society-of-india-ardsi-helpline")}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
      
    </View>


    <View style={styles.container2}>
      
      <View style={styles.content}>
      <Image source={{ uri: "https://www.ardsihyd.org/img/ardsi_images/activity_centre.jpg" }} style={styles.image2}  />

        <Text style={styles.title2}>ARDSI Hyderabad Deccan</Text>
        <Text style={styles.description}>ARDSI Hyderabad Deccan, based in Hyderabad, is a local chapter of the national office of the Alzheimer's and Related Disorders Society of India - a national, secular, non-profit, voluntary organization dedicated to improve the quality of life of people with dementia and families.</Text>
        <TouchableOpacity style={styles.button} onPress={() => openLink("https://www.ardsihyd.org/")}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
      
    </View>


    </ScrollView>
    </>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 155,
    borderRadius: 5,
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
    width: 330,
    height: 200,
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
  description: {
    fontSize: 14,
    fontFamily:'mon-sb',
    color: '#888',
  },
});

export default CourseCard;