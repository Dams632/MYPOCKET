
import { Gasto } from "../../types/gastos"
import { useMemo } from "react"
import  BarChart  from "react-native-chart-kit/dist/BarChart"
import { Dimensions } from "react-native"

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
    6: 'Saturday',
}

export const SemanalChart =({expenses}:Props) => {
    const groupedExpenses = useMemo(()=>{
        const groupedExpenses = expenses.reduce((acc,expense)=>{
            const day = dayNumberNames[new Date(expense.date).getDay()];
            acc[day] += expense.amount;
            
            return acc;
        },{
            /*Sunday:0,
            Monday:0,
            Tuesday:0,
            Wednesday:0,
            Thursday:0,
            Friday:0,
            Saturday:0*/
        } as Record<string,number>);
        return groupedExpenses;

     },[expenses])
    
     
    return(
        <BarChart
        style={{}}
        data={{
            labels: Object.keys(groupedExpenses),
            datasets: [{
                data: Object.values(groupedExpenses),
            },],
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel='$'
        yAxisSuffix='k'
        chartConfig={{
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
        verticalLabelRotation={30}
      />
    )

}