import { CustomScrollView } from '@/components/CustomScrollView';
import { Navbar } from '@/components/Navbar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function BudgetScreen() {
    const router = useRouter();

    return (
        <ThemedView style={{ flex: 1 }}>
            <Navbar
                title="Budget"
                leftAction={
                    <TouchableOpacity onPress={() => router.push("/")}>
                        <IconSymbol name="arrow.left" size={22} color="#ffffff" />
                    </TouchableOpacity>
                }
            />
            <CustomScrollView>
                <ThemedText type="title">Budget</ThemedText>
                <ThemedText type="subtitle">(Under Construction)</ThemedText> 
            </CustomScrollView>
        </ThemedView>
    );
}