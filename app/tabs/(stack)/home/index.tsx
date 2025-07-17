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
        <CustomButton
          className='mb-2'
          onPress={() => router.push('/tabs/(stack)/products')}
        >
          Productos
        </CustomButton>
        <CustomButton
          className='mb-2'
          color='secondary'
          onPress={() => router.push('/tabs/(stack)/profile')}
        >
          Perfil
        </CustomButton>
        <CustomButton
          className='mb-2'
          color='tertiary'
          onPress={() => router.push('/tabs/settings')}
        >
          Configuración
        </CustomButton>
        <Link href="/tabs/products" asChild>
          <CustomButton
            className='mb-2'
            variant='text-only'>
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
