import { Text,TouchableOpacity,View } from "react-native";
import ExpensesList from "../components/ExpensesList";
import { Recurrence } from "../types/recurrence";
import { theme } from "../themes/inex";

export const Expenses =() => (
    <View style={{
        display:'flex', 
        flexDirection: 'column',
        overflow: 'scroll',
        paddingHorizontal: 16,
        
        }}>
          <View style={{display:'flex', alignItems:'center',flexDirection:'row', marginBottom:16, justifyContent:'center'}}>
            <Text style={{color:theme.colors.textPrimary, fontSize:17}}>Total de:</Text>
            <TouchableOpacity style={{marginLeft:16}}>
              <Text style={{color:theme.colors.primary, fontSize:17}}>Esta semana</Text>
            </TouchableOpacity>
          </View>
          <View style={{display:'flex', flexDirection:'row',alignItems:'flex-start', justifyContent:'center',marginBottom:16}}>
            <Text style={{color:theme.colors.textSecondary,fontSize:17,marginTop:2}}>$</Text>
            <Text style={{color:theme.colors.textPrimary, fontSize:30, marginLeft:2,fontWeight:'600'}}>353535</Text>
          </View>

    <ExpensesList
        groups={[{
            day: 'Today',
            expenses: [{
                id:'1',
                amount: 100000,
                category: {
                    id:'2',
                    name: 'Food',
                    color: '#FFD600',
                },
                date: new Date('2023-01-01T00:00:00'),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'3',
                amount: 200,
                category: {
                    id:'4',
                    name: 'Transport',
                    color: '#848493',
                },
                date: new Date('2023-01-02T00:00:00'),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'5',
                amount: 300,
                category: {
                    id:'6',
                    name: 'clothes',
                    color: '#FFD600',
                },
                date: new Date('2023-01-03T00:00:00'),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300

        },{
            day: 'Yesterday',
            expenses: [{
                id:'7',
                amount: 1000000,
                category: {
                    id:'8',
                    name: 'casa',
                    color: '#FFD600',
                },
                date: new Date('2023-01-04T00:00:00'),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            
            },{
                id:'9',
                amount: 20000,
                category: {
                    id:'10',
                    name: 'Trabajo',
                    color: '#848493',
                },
                date: new Date("2023-01-05T00:00:00"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'11',
                amount: 300,
                category: {
                    id:'12',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date("2023-01-06T00:00:00"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            },{
                id:'13',
                amount: 300,
                category: {
                    id:'14',
                    name: 'lolll',
                    color: '#FFD600',
                },
                date: new Date("2023-01-07T00:00:00"),
                note: 'Compre algo de comida',
                recurrence: Recurrence.Ninguno,
            }],
            total:300
        }]}
    />
    </View>
);