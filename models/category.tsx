import Realm from 'realm'

export class Category extends Realm.Object{
    _id: Realm.BSON.ObjectId;
    color: string;
    name: string;

    static generate(name: string, color: string){
        return{
            _id: new Realm.BSON.ObjectId(),
            color,
            name,
        };
    }

    static schema={
        name: 'Category',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            color: 'string',

        }
    }
}