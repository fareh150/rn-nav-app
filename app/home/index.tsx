import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
        <Link href="/products">
          <Text>Go to Products</Text>
        </Link>
        <Link href="/settings">
          <Text>Go to Settings</Text>
        </Link>
        <Link href="/profile">
          <Text>Go to Profile</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
