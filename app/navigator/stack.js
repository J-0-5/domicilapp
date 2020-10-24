import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//Screen
import Routes from './stackRoutes';

const Stack = createStackNavigator();


function AppStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Routes.Splash}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CreateAccount"
                    component={Routes.CreateAccount}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Routes.Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Problems"
                    component={Routes.Problems}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="EnterCode"
                    component={Routes.EnterCode}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Routes.Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SupermarketHome"
                    component={Routes.SupermarketHome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="MySupermarketBasket"
                    component={Routes.MySupermarketBasket}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Supermarket"
                    component={Routes.Supermarket}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ProductDetails"
                    component={Routes.ProductDetails}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="RestaurantHome"
                    component={Routes.RestaurantHome}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="MyRestaurantBasket"
                    component={Routes.MyRestaurantBasket}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Restaurant"
                    component={Routes.Restaurant}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="FoodDetails"
                    component={Routes.FoodDetails}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="WayToPay"
                    component={Routes.WayToPay}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Pay"
                    component={Routes.Pay}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SuccesfulOrder"
                    component={Routes.SuccesfulOrder}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Routes.Profile}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ProfileData"
                    component={Routes.ProfileData}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="OrdersHistory"
                    component={Routes.OrdersHistory}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="OrdersDetails"
                    component={Routes.OrdersDetails}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="MyAddresses"
                    component={Routes.MyAddresses}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="PaymentMethods"
                    component={Routes.PaymentMethods}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CourierRequest"
                    component={Routes.CourierRequest}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AttachID"
                    component={Routes.AttachID}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AttachSOAT"
                    component={Routes.AttachSOAT}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AllyRequest"
                    component={Routes.AllyRequest}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="TermsNConditions"
                    component={Routes.TermsNConditions}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="SuccesfulTerms"
                    component={Routes.SuccesfulTerms}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CurrentOrders"
                    component={Routes.CurrentOrders}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="OrderStatus"
                    component={Routes.OrderStatus}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Information"
                    component={Routes.Information}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HowToOrder"
                    component={Routes.HowToOrder}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CoverArea"
                    component={Routes.CoverArea}
                    options={{
                        headerShown: false,
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppStack;