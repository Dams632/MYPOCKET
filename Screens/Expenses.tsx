import { Text } from "react-native";
import ExpensesList from "../components/ExpensesList";
import { Recurrence } from "../types/recurrence";

export const Expenses =() => (
    <ExpensesList
        groups={[{
            day: 'Today',
            expenses: [{
                id:'1',
                amount: 100000,
                category: {
                    id:'1',
                    name: 'Food',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'2',
                amount: 200,
                category: {
                    id:'1',
                    name: 'Transport',
                    color: '#848493',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'3',
                amount: 300,
                category: {
                    id:'1',
                    name: 'clothes',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300

        },{
            day: 'Yesterday',
            expenses: [{
                id:'1',
                amount: 1000000,
                category: {
                    id:'1',
                    name: 'casa',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'2',
                amount: 20000,
                category: {
                    id:'1',
                    name: 'Trabajo',
                    color: '#848493',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'3',
                amount: 300,
                category: {
                    id:'1',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'4',
                amount: 300,
                category: {
                    id:'1',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date(),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300
        }]}
    />
);