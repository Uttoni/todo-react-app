import { useState } from 'react';

import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [taskList, setTaskList] = useState<Item[]>([
    {id: 1, description: "Estudar pra prova teórica da auto-escola", done: false},
    {id: 2, description: "Caminhada e corrida com o Diego", done: true}
  ]);

  const handleAddTask = (taskDescription: string) => {
    let newList = [...taskList];
    newList.push({
      id: taskList.length+1,
      description: taskDescription,
      done: false
    });
    setTaskList(newList);
  }

  const handleCheckTask = (taskId: number, check: boolean) => {
    
    let list = [...taskList];
    list.forEach((item) => {
      if(item.id === taskId){
        item.done = check;
      }
    });
    setTaskList(list);
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Task List</C.Header>

        <AddArea 
          onEnter={handleAddTask}
        />

        {
          taskList.map((item, index) => (
            <ListItem key={index} item={item} onCheck={handleCheckTask}/>
          ))
        }
      </C.Area> 
    </C.Container>
  );
}

export default App;