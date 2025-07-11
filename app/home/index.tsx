import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Link className="mb-5" href="/products">
          <Text>Go to Products</Text>
        </Link>
        <Link className="mb-5" href="/profile">
          <Text>Go to Profile</Text>
        </Link>
        <Link className="mb-5" href="/settings">
          <Text>Go to Settings</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
