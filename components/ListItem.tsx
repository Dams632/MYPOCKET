import React, { useMemo } from 'react';
//import Swipeable from 'react-native-Swipeable';
import {TouchableOpacity,Text, View} from 'react-native'
import { theme } from '../themes/inex';
import { Swipeable } from 'react-native-gesture-handler';





type Props = {
    label: string;
    detail?: React.ReactNode;
    onClick?: () => void;
    swipeToDelete?: boolean;
    onDelete?: () => void;
    isDestructive?: boolean;
}

export const ListItem = (
    {
        label,
        detail,
        onClick,
        swipeToDelete,
        onDelete,
        isDestructive,
    }:Props) => {
        const item = useMemo(()=>( <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: !!detail ? 'space-between' :'flex-start' ,
                alignItems: 'center',
                padding: 20,
                borderBottomColor: theme.colors.border,
                borderBottomWidth: 1,
                backgroundColor: theme.colors.card,
                width: '100%'

                
            }}
            onPress={onClick}
        >
            <Text style={{fontSize:18, color:'white'}}>{label}</Text>
            {detail}
        </TouchableOpacity>),
        []);
        
        if(swipeToDelete){
            return(<Swipeable
                renderRightActions={()=>(
                    <TouchableOpacity
                     style={{
                            
                            justifyContent: 'center',
                         alignItems: 'center',
                         width: 100,
                         
                     }}
                      onPress={onDelete}
                  >
                 <Text style={{color: 'white'}}>Delete</Text>
    
                 </TouchableOpacity>
                )}
                onSwipeableRightOpen={onDelete}
                >
               
         </Swipeable>);
        }
        return item;
    };
