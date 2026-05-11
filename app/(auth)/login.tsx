import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from 'heroui-native/button';

import { Text } from '@/components/ui/text';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-6 py-12">
      <View className="flex-1 justify-between rounded-[32px] border border-border bg-card p-6 shadow-sm">
        <View className="gap-4">
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Text variant="large">◎</Text>
          </View>

          <View className="gap-2">
            <Text variant="subtitle">EXPO-BOILATE</Text>
            <Text variant="default">
              Base auth shell is ready. Convex wiring comes later; for now we are sketching the
              screens and navigation rails.
            </Text>
          </View>
        </View>

        <View className="gap-3">
          <Button variant="primary" size="lg" onPress={() => router.replace('/')}>
            Enter app shell
          </Button>
          <Button variant="secondary" size="lg" onPress={() => router.replace('/profile')}>
            Preview profile
          </Button>
        </View>
      </View>
    </View>
  );
}
