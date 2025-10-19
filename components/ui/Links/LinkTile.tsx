import Card from '@/components/ui/Card';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type LinkTileProps = {
    href: string;
    icon: string;
    label: string;
    color?: string;
};

export default function LinkTile({ href, icon, label, color = '#6366F1' }: LinkTileProps) {
    return (
        <Link href={href as any} asChild> 
            <TouchableOpacity style={styles.touchable}>
                <Card style={styles.card}>
                    <View style={styles.content}>
                        <IconSymbol name={icon as any} size={28} color={color} />
                        <Text style={styles.label}>{label}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        marginHorizontal: 4,
        borderRadius: 16,
        backgroundColor: '#F9FAFB',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
    },
    content: {
        alignItems: 'center',
        gap: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1F2937',
    },
});
