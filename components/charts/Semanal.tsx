import { Text } from "react-native"
import { Gasto } from "../../types/gastos"
import { useMemo } from "react"

type Props = {
    expenses: Gasto[],
}

const dayNumberNames={
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
}

export const SemanalChart =({expenses}:Props) => {
    const groupedExpenses = useMemo(()=>{
        const groupedExpenses = expenses.reduce((acc,expense)=>{
            const day = dayNumberNames[new Date(expense.date).getDay()];
            if(acc[day]){
                acc[day] += expense.amount;
            }else{
                acc[day] = expense.amount;
            }
            return acc;
        },{} as Record<string,number>);
        return groupedExpenses;

     },[expenses])
    
    return(
    <Text style={{color:'white'}}>GRAFICAAAA</Text>
    )

}