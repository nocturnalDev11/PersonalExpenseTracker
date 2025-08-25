import { Stack } from "expo-router";

export default function ExpensesLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Expenses" }} />
        <Stack.Screen name="add" options={{ title: "Add Expense" }} />
        <Stack.Screen name="[id]" options={{ title: "Expense Details" }} />
    </Stack>
  );
}
