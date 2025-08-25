import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

type Props = PropsWithChildren<{
    padding?: number;
}>;

export function CustomScrollView({ children, padding = 16 }: Props) {
    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });

    return (
        <Animated.ScrollView
            style={styles.container}
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
