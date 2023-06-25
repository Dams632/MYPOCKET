import { Category } from "./category";
import { Recurrence } from "./recurrence"

export type Gasto ={
    id: string,
    //name:string,
    amount: number,
    recurrence: Recurrence,
    date: Date,
    note: string,
    category: Category

}