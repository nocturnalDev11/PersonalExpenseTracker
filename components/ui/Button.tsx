import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
    label: string;
    icon?: string;
    iconPosition?: 'top' | 'left';
    variant?: 'primary' | 'secondary';
    onPress?: () => void;
};

export default function Button({
    label,
    icon,
    iconPosition = 'left',
    variant = 'secondary',
    onPress,
}: ButtonProps) {
    const isPrimary = variant === 'primary';
    const isTop = iconPosition === 'top';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                isPrimary ? styles.primaryButton : styles.secondaryButton,
            ]}
        >
            <View
                style={[
                    styles.content,
                    isTop ? styles.vertical : styles.horizontal,
                ]}
            >
                {icon && (
                    <IconSymbol
                        name={icon as any}
                        color={isPrimary ? '#FFFFFF' : '#4B5563'}
                        size={isTop ? 26 : 18}
                        style={isTop ? { marginBottom: 6 } : { marginRight: 8 }}
                    />
                )}
                <Text style={[styles.label, isPrimary ? styles.primaryLabel : styles.secondaryLabel]}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    primaryButton: {
        backgroundColor: '#6366F1',
    },
    secondaryButton: {
        backgroundColor: '#F3F4F6',
    },
    label: {
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    },
    primaryLabel: {
        color: '#FFFFFF',
    },
    secondaryLabel: {
        color: '#1F2937',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
});
