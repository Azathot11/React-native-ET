import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native";

import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import ManageExpenses from "./screens/ManageExpenses";
import {GlobalStyles} from "./constants/styles";
import IconButton from "./components/ui/IconButton";
import ExpenseContextProvider from "./context/expense-context";


const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator()

const ExpensesOverview=()=>{
    const {navigate} = useNavigation();
    return (
        <BottomTab.Navigator
            initialRouteName={'RecentExpenses'}
            screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white',
            tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
            tabBarActiveTintColor:GlobalStyles.colors.accent500,
            headerRight: () => {
                return <IconButton name={'add'} size={24} color={'white'} onPressHandler={() => {
                    navigate('ManageExpenses')
                }}/>
            }
        }}
        >
            <BottomTab.Screen
                name={'RecentExpenses'}
                component={RecentExpenses}
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name={'hourglass'} size={size} color={color}/>
                    }
                }}
            />
            <BottomTab.Screen
                name={'AllExpenses'}
                component={AllExpenses}
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'Expenses',
                    tabBarIcon: ({color, size}) => {
                        return <Ionicons name={'calendar'} size={size} color={color}/>
                    }
                }}
            />
        </BottomTab.Navigator>
    )
}

export default function App() {
  return (
    <ExpenseContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
          <Stack.Navigator initialRouteName={'ExpensesOverview'}
                           screenOptions={{contentStyle: {backgroundColor: GlobalStyles.colors.primary400}}}
          >
              <Stack.Screen name={'ExpensesOverview'} component={ExpensesOverview}  options={{
                  headerShown:false
              }}/>
              <Stack.Screen name={'ManageExpenses'} component={ManageExpenses}
                            options={{
                                title: 'Manage Expenses',
                                headerStyle: { backgroundColor: GlobalStyles.colors.primary500},
                                headerTintColor: 'white',
                                headerBackTitle:"Back",
                                presentation: 'modal'
                            }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
