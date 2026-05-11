import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from 'heroui-native/button';

import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-background px-6">
      <View className="w-full max-w-md gap-4 rounded-3xl border border-border bg-card p-6">
        <Text variant="title">404</Text>
        <Text variant="default">This route does not exist yet, desu~</Text>
        <Button variant="primary" className="w-full" onPress={() => router.replace('/login')}>
          Back to login
        </Button>
      </View>
    </View>
  );
}
