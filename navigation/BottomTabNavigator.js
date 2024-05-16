// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import { StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import StartScreen from "../screens/StartScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import searchIcon from "../assets/images/Search.png"

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Start"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Start"
        component={StartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={searchIcon} style={styles.icon} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image source={searchIcon} style={styles.icon} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const StartStack = createStackNavigator();

function StartNavigator() {
  return (
    <StartStack.Navigator>
      <StartStack.Screen
        name="StartScreen"
        component={StartScreen}
        options={{ headerShown: false}}
      />
    </StartStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false}}
      />
    </TabTwoStack.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20
  },
});