import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
        {/* title */}
        
        {/* assistant image */}
        <View className="flex-row justify-center">
            <Image  
                source={require('../../assets/images/home.png')}
                style={{height: wp(75), width: wp(75)}}
            />
        </View>

        <View className="space-y-2">
            <Text style={{fontSize: wp(9)}} className="text-3xl font-semibold ml-8 text-black">
               Your overall
            </Text>
            <Text style={{fontSize: wp(9)}} className="text-3xl font-semibold ml-8 text-black">
                companion
            </Text>
            <Text style={{fontSize: wp(9)}} className="text-3xl font-bold ml-8 text-sky-500">
                for Alzheimer's.
            </Text>
        </View>
        
        {/* start button */}
        <TouchableOpacity onPress={()=> navigation.navigate('AI Prognosis')} className="bg-sky-500 mx-5 p-4 rounded-2xl">
            <Text style={{fontSize: wp(5)}} className="text-center font-bold text-white">
                Early Prognosis
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('AI Chat Assistant')} className="bg-sky-500 mx-5 p-4 relative bottom-9 rounded-2xl">
            <Text style={{fontSize: wp(5)}} className="text-center font-bold text-white">
                Care Management
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}