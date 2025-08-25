import { CustomScrollView } from '@/components/CustomScrollView';
import { Navbar } from '@/components/Navbar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SettingsScreen() {
    return (
        <ThemedView style={{ flex: 1 }}>
            <Navbar
                title="Settings"
            />
            <CustomScrollView>
                <ThemedText type="title">Settings</ThemedText>
                <ThemedText type="subtitle">(Under Construction)</ThemedText> 
            </CustomScrollView>
        </ThemedView>
    );
}