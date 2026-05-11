import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from 'heroui-native/button';

import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-6 py-12">
      <View className="flex-1 gap-6 rounded-[32px] border border-border bg-card p-6 shadow-sm">
        <View className="gap-2">
          <Text variant="subtitle">Home</Text>
          <Text variant="default">
            This is the first app shell screen. We will layer Convex auth and protected routing on
            top of this scaffold later.
          </Text>
        </View>

        <View className="gap-3">
          <View className="rounded-2xl border border-border bg-background p-4">
            <Text variant="smallBold">What is ready now</Text>
            <Text variant="small">• Expo Router base layouts</Text>
            <Text variant="small">• Uniwind + HeroUI Native setup</Text>
            <Text variant="small">• Tabs for home and profile</Text>
          </View>

          <Button variant="primary" size="lg" onPress={() => router.push('/profile')}>
            Open profile
          </Button>
          <Button variant="secondary" size="lg" onPress={() => router.push('/login')}>
            Back to login shell
          </Button>
        </View>
      </View>
    </View>
  );
}
