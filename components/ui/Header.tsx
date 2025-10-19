import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
    greeting?: string;
    title: string;
    onProfilePress?: () => void;
    profileIcon?: string;
}

export default function Header({ greeting, title, onProfilePress, profileIcon = '👤' }: HeaderProps) {
    return (
        <View style={styles.header}>
            <View>
                {greeting && <Text style={styles.greeting}>{greeting}</Text>}
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
                <Text style={styles.profileIcon}>{profileIcon}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: '#FFFFFF',
    },
    greeting: {
        fontSize: 14,
        color: '#6B7280',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1F2937',
        marginTop: 4,
    },
    profileButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIcon: {
        fontSize: 20,
    },
});
