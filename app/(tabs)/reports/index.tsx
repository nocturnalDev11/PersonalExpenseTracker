import { CustomScrollView } from '@/components/CustomScrollView';
import { Navbar } from '@/components/Navbar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ReportsScreen() {

    return (
        <ThemedView style={{ flex: 1 }}>
            <Navbar
                title="Reports"
            />
            <CustomScrollView>
                <ThemedText type="title">Reports</ThemedText>
                <ThemedText type="subtitle">(Under Construction)</ThemedText> 
            </CustomScrollView>
        </ThemedView>
    );
}