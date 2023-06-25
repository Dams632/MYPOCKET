import Realm from 'realm'
import { Category } from './category';
import { Recurrence } from '../types/recurrence';

export class Expense extends Realm.Object{
    _id: Realm.BSON.ObjectId;
    amount : number;
    recurrence:string;
    date: Date;
    description: string;
    category: Category;
    

    static generate(amount: number,recurrence: Recurrence,date:Date,description:string, category: Category){
        return{
            _id: new Realm.BSON.ObjectId(),
            amount,
            recurrence: recurrence.toString(),
            date,
            description,
            category,
        };
    }

    static schema={
        name: 'Expense',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            amount:  'int',
            recurrence:' string',
            date: 'Date',
            description: ' string',
            category: 'Category ?',
            
        }
    }
}