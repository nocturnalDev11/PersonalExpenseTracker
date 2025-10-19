import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SectionProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

export default function Section({ children, style }: SectionProps) {
    return <View style={[styles.section, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    section: {
        paddingHorizontal: 20,
        marginTop: 32,
    },
});
