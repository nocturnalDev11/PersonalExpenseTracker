import { StyleSheet } from 'react-native';

import { CustomScrollView } from '@/components/CustomScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AddExpenseScreen() {
    return (
        <CustomScrollView>
            <ThemedText type="title">Reports</ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="subtitle">(Under Construction)</ThemedText> 
            </ThemedView>
        </CustomScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});