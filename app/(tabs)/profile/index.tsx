import { useRouter } from 'expo-router';
import { View } from 'react-native';

import { Button } from 'heroui-native/button';

import { Text } from '@/components/ui/text';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background px-6 py-12">
      <View className="flex-1 gap-6 rounded-[32px] border border-border bg-card p-6 shadow-sm">
        <View className="gap-2">
          <Text variant="subtitle">Profile</Text>
          <Text variant="default">
            This route will later show authenticated account data, theme controls, and session
            actions once Convex auth is wired in.
          </Text>
        </View>

        <View className="gap-3">
          <View className="rounded-2xl border border-border bg-background p-4">
            <Text variant="smallBold">Profile placeholder</Text>
            <Text variant="small">User avatar, settings, and auth state will live here.</Text>
          </View>

          <Button variant="primary" size="lg" onPress={() => router.replace('/')}>
            Return home
          </Button>
        </View>
      </View>
    </View>
  );
}
