import { Navbar } from "@/components/Navbar";
import { Stack } from "expo-router";

export default function ExpensesLayout() {
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
                    header: () => <Navbar title="Expenses" />,
                }}
            />
            <Stack.Screen
                name="add"
                options={{
                    header: () => <Navbar title="Add Expense" showBack />,
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    header: () => <Navbar title="Expense Details" showBack />,
                }}
            />
        </Stack>
    );
}
