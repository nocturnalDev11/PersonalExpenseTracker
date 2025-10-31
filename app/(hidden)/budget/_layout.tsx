import { Navbar } from "@/components/Navbar";
import { Stack } from "expo-router";

export default function BudgetLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "transparent" },
                headerShadowVisible: false,
                headerShown: false
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    header: () => <Navbar title="Budget" />,
                }}
            />
            {/* <Stack.Screen
                name="add"
                options={{
                    header: () => <Navbar title="Add Budget" showBack />,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    header: () => <Navbar title="Expense Budget" showBack />,
                }}
            /> */}
        </Stack>
    );
}
