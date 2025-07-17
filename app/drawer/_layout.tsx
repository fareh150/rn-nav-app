import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawer from 'components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            drawerActiveTintColor: 'indigo',
            drawerContentStyle: { backgroundColor: 'white' },
            headerShadowVisible: false,
        }}
    >
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="person-circle-outline" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Horario',
            title: 'Horario',
            drawerIcon: ({ color, size }) => (
                <Ionicons name="calendar-outline" size={size} color={color} />
            )
          }}
        />
      </Drawer>
  )
}

export default DrawerLayout