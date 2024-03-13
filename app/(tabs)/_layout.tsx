import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}>
      <Tabs.Screen
        name="services"
        options={{
          tabBarLabel: 'Services',
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="doctor" size={size} color={color} />,
        }}
      />
       <Tabs.Screen
        name="ai-prognosis"
        options={{
          tabBarLabel: 'AI Prognosis',
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="puzzle-heart" size={size} color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="ai-assistant"
        options={{
          tabBarLabel: 'AI Assistant',
          tabBarIcon: ({ size, color }) => <Ionicons name="logo-android" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarLabel: 'Community',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',

          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
