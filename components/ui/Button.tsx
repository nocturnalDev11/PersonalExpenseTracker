import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
    label: string;
    onPress?: () => void;
    icon?: string;
    variant?: 'default' | 'primary' | 'danger';
    style?: ViewStyle;
}

export default function Button({ label, onPress, icon, variant = 'default', style }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.base, styles[variant], style]}>
            {icon && <Text style={styles.icon}>{icon}</Text>}
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16,
        borderRadius: 16,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    primary: {
        backgroundColor: '#10B981',
    },
    default: {
        backgroundColor: '#FFFFFF',
    },
    danger: {
        backgroundColor: '#EF4444',
    },
    icon: {
        fontSize: 24,
        marginBottom: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1F2937',
    },
});
