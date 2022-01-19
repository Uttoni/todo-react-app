import { ChangeEvent, useState } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    item: Item, 
    onCheck: (taskId: number, check: boolean) => void 
}

export const ListItem = ({ item, onCheck }: Props) => {
    
    const [isChecked, setIsChecked] = useState(item.done);

    const handleCheckBox = () => {
        onCheck(item.id, !isChecked);
        setIsChecked(!isChecked);
    }

    return (
        <C.Container done={isChecked}>
            <input 
                type="checkbox" 
                checked={isChecked}
                onClick={handleCheckBox}
            />
            <label>{item.description} - {item.done.toString()}</label>
        </C.Container>
    );
}