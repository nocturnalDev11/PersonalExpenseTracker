import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Header from '@/components/ui/Header';
import Section from '@/components/ui/Section';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
    const [expenses, setExpenses] = useState([
        { id: 1, title: 'Groceries', amount: 1250, category: 'Food', date: '2025-10-18' },
        { id: 2, title: 'Coffee', amount: 150, category: 'Food', date: '2025-10-18' },
        { id: 3, title: 'Uber', amount: 320, category: 'Transport', date: '2025-10-17' },
        { id: 4, title: 'Netflix', amount: 499, category: 'Entertainment', date: '2025-10-15' },
    ]);

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const todayExpenses = expenses
        .filter(exp => exp.date === '2025-10-18')
        .reduce((sum, exp) => sum + exp.amount, 0);

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            Food: '🍽️',
            Transport: '🚗',
            Entertainment: '🎬',
            Shopping: '🛍️',
            Bills: '💡',
        };
        return icons[category] || '💰';
    };

    return (
        <Container>
            <ScrollView>
                <Header greeting="Good evening" title="Track your expenses" />

                <Card style={{ backgroundColor: '#6366F1', marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ fontSize: 14, color: '#E0E7FF' }}>Total Expenses This Month</Text>
                    <Text style={{ fontSize: 36, fontWeight: '700', color: '#FFFFFF', marginBottom: 20 }}>
                        ₱{totalExpenses.toLocaleString()}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12, color: '#E0E7FF' }}>Today</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>
                                ₱{todayExpenses}
                            </Text>
                        </View>
                        <View style={{ width: 1, height: 30, backgroundColor: '#818CF8', marginHorizontal: 16 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 12, color: '#E0E7FF' }}>Transactions</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFFFFF' }}>{expenses.length}</Text>
                        </View>
                    </View>
                </Card>

                <Section style={{ flexDirection: 'row', gap: 12, marginTop: 24 }}>
                    <Button label="Add Expense" icon="➕" variant="primary" />
                    <Button label="Reports" icon="📊" />
                    <Button label="Budget" icon="🎯" />
                </Section>

                <Section>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                        <Text style={{ fontSize: 18, fontWeight: '700', color: '#1F2937' }}>Recent Transactions</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#6366F1', fontWeight: '600' }}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    {expenses.map((expense) => (
                        <Card key={expense.id} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
                            <View style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginRight: 12 }}>
                                <Text style={{ fontSize: 24 }}>{getCategoryIcon(expense.category)}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#1F2937' }}>{expense.title}</Text>
                                <Text style={{ fontSize: 14, color: '#6B7280' }}>{expense.category}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 16, fontWeight: '700', color: '#EF4444' }}>-₱{expense.amount}</Text>
                                <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
                                {new Date(expense.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </Text>
                            </View>
                        </Card>
                    ))}
                </Section>
            </ScrollView>
        </Container>
    );
}
