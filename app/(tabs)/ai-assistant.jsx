import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { GiftedChat } from 'react-native-gifted-chat'
import getResponse from '../services/GlobalAPI'
import * as Speech from 'expo-speech';

const Chat = () => {

  const [isSpeaking, setIsSpeaking] = useState(false);

  const [messages, setMessages] = useState([])
  const [loading,setLoading] = useState(true)
  const [intialLoad,setIntialLoad] = useState(true)


    const handleSpeak = (text) => {
    if (text.trim() !== '') {
      setIsSpeaking(true);
      Speech.speak(text, {
        onDone: () => setIsSpeaking(false),
        onStopped: () => setIsSpeaking(false),
        onError: () => setIsSpeaking(false),
      });
    } else {
      Alert.alert('Empty Text', 'Please enter some text to speak.');
    }
  };

  useEffect(() => {
    setTimeout(() => {
    setIntialLoad(false)
    }, 1000);
  },[])

  useEffect(()=>{
    setMessages([
      {
        _id: 1,
        text: `Hello I'm AlziCare AI assiant to help you out with any queries about Alzhimer's. How can I help you?`,
        createdAt: new Date(), 
        user: {
          _id: 2,
          name: "AlziCare AI",
          // avatar: ,
        },
      },
    ])
  },[intialLoad])


  const onSend = useCallback((messages = []) => {
    setLoading(true)
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),

    )
    response(messages[0].text)
    setLoading(true)


  }, [])


  const response = async (userMsg) => {
    setLoading(true)
    const data = await getResponse(userMsg)
    if(data.data.data.chat){
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, {
          _id: Math.floor(Math.random() * 1000000),
          text: data.data.data.chat,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "AlziCare AI",
            // avatar: selectedChatFace.image,
          },
        }),
        )
        handleSpeak(data.data.data.chat)
    setLoading(false)
    }
    else{
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, {
          _id: Math.floor(Math.random() * 1000000),
          text: "Sorry, I am not able to understand your query. Please try again.",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "AI",
            // avatar: selectedChatFace,
          },
        }),
      )
    setLoading(false)
    }
    
  }


  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      {
        intialLoad ? <Text style={{textAlign:'center',marginTop:20,fontSize:20,fontWeight:'bold'}}>Just a moment...</Text> :       <GiftedChat
        messages={messages}
        isTyping={loading}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      }

    </View>
  )
}

export default Chat
