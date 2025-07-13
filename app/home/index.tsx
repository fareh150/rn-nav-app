import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import CustomButton from 'components/shared/CustomButton';

const HomeScreen = () =>
{
  return (
    <SafeAreaView>
      <View className="mt-5 px-10">
        <Link href="/products" asChild>
          <CustomButton className='mb-10'>
            Productos
          </CustomButton>
        </Link>
        <CustomButton
          className='mb-10'
          onPress={() => router.push('/products')}
        >
          Productos
        </CustomButton>
        <CustomButton
          className='mb-10'
          variant='text-only'
          onPress={() => router.push('/products')}
        >
          Productos
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
