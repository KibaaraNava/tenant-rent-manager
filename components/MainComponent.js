import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button } from "react-native-elements";
import LandingScreen from "../screens/LandingScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer= createDrawerNavigator();

const Stack = createStackNavigator();
//Stack Navigator
const MainStack= () => {
    
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={LandingScreen}
                options={{
                    headerShown: true,
                    headerLeft: () => {
                        <Button 
                            onPress={() => navigation.toggleDrawer()}
                            title="Menu"
                            color="#00B140" 
                        />
                    },
                    headerStyle: {
                        backgroundColor: "#3F51B5"
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }}
            />
        </Stack.Navigator>
    )
};
//Drawer Navigator
const MainComponent = () => {

    return(
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: "#3F51B5"
                    },
                    drawerLabelStyle: {
                        color: "#FF5722"
                    }
                }}
            >
                <Drawer.Screen
                        name="Moringa Connect"
                        component={MainStack}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default MainComponent;