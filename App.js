import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import MainComponent from './components/MainComponent';
import LoadingScreen from './components/LoadingScreen';

{/*SplashScreen.preventAutoHideAsync */}
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [splashHidden, setSplashHidden] = useState(false);

  {/*useEffect hook */}
  useEffect(() => {
    const prepareApp = async () => {
      try{

        console.log("App is starting");
        {/*Splashscreen loading simulation */}
        await new Promise(resolve => setTimeout(resolve, 2000));

        {/*Hide SplashScreen*/}
        await SplashScreen.hideAsync();
        setSplashHidden(true);
        
        {/*Loading screen simulation */}
        await new Promise(resolve => setTimeout(resolve, 5000));
        console.log("App is ready");
        setAppReady(true);

      } catch(error){
        console.log("Error during app preparation", error);
      }
    };

    prepareApp();
  }, []);

  if(!splashHidden){
    return null;
  } 
  if(!appReady){
    return (
      <LoadingScreen />
    )
  }; 

  return (
    <MainComponent />
  );
}


