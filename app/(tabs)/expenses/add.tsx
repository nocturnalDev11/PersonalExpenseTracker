import { CustomScrollView } from '@/components/CustomScrollView';
import { Navbar } from '@/components/Navbar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function AddExpenseScreen() {
    const router = useRouter();

    return (
        <ThemedView style={{ flex: 1 }}>
            <Navbar
                title="Add Expenses"
                leftAction={
                    <TouchableOpacity onPress={() => router.push("/expenses")}>
                        <IconSymbol name="arrow.left" size={22} color="#3b82f6" />
                    </TouchableOpacity>
                }
            />
            <CustomScrollView>
                <ThemedText type="title">Add Expenses</ThemedText>
                <ThemedText type="subtitle">(Under Construction)</ThemedText> 
            </CustomScrollView>
        </ThemedView>
    );
}