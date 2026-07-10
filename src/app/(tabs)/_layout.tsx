import { Colors } from '@/constants/theme';
import { Tabs } from 'expo-router';
import { Briefcase, Home, List, Phone } from 'lucide-react-native';

export default function TabLayout(){
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary, // Active blue color from your Figma design
        tabBarInactiveTintColor: "#64748b",
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Home size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          title: "Work",
          tabBarIcon: ({ color }) => (
            <Briefcase size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => (
            <List size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <Phone size={25} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}