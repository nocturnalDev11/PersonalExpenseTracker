import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type NavbarProps = {
    title: string;
    showBack?: boolean;
    leftAction?: React.ReactNode;
    rightAction?: React.ReactNode;
};

export function Navbar({ title, showBack = false, leftAction, rightAction }: NavbarProps) {
    const router = useRouter();

    const backgroundColor = "#10B981";
    const textColor = "#FFFFFF";

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 20,
                paddingVertical: 25,
                backgroundColor,
                borderBottomWidth: 0.5,
                borderBottomColor: "rgba(255,255,255,0.3)",
                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 6,
                elevation: 23,
            }}
        >
            {/* Left action OR back button */}
            {leftAction ? (
                leftAction
            ) : showBack ? (
                <TouchableOpacity onPress={() => router.back()} style={{ padding: 4 }}>
                    <IconSymbol name="arrow.left" size={22} color={textColor} />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 26 }} />
            )}

            {/* Title */}
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "600",
                    color: textColor,
                }}
            >
                {title}
            </Text>

            {/* Right-side action (optional) */}
            <View>{rightAction ?? <View style={{ width: 26 }} />}</View>
        </View>
    );
}
