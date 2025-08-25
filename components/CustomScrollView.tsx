import { useThemeColor } from "@/hooks/useThemeColor";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

type Props = PropsWithChildren<{
    padding?: number;
    lightColor?: string;
    darkColor?: string;
}>;

export function CustomScrollView({ children, padding = 16, lightColor, darkColor }: Props) {
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    // Get themed background
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return (
        <Animated.ScrollView
            style={[styles.container, { backgroundColor }]}
            contentContainerStyle={{ padding }}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
        >
            {children}
        </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
