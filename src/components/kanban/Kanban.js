import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../mockData"
import{ Card } from '../card/Card';
import { useState} from 'react'
import { index } from "mathjs";

function Kanban (props){
    
    const [data, setData]= useState(mockData)
     
    //Para traer lo que tenga dentro del contexto de arrastre
    const onDragEnd= (result) => {
        //si nuestro result esta fuera del contexto que no haga nada
        if(!result.destination) return 
        
        //Source para saber en que evento me encuentro y destination para validar si el destino donde estoy soltando es el area de trabajo
        const { source, destination} = result
        //Le pregunto si el origen fuese diferente al id de destino, si puedo hacer el arrastre
        if (source.DroppableId  !==destination.DroppableId )
        {
            //Obtenemos el index de la columna de origen (donde me encuentro), el primero que encuentre
            const sourceColIndex= data.findIndex(item=>item.id === source.DroppableId)

            //Obtenemos la columna del destino
            const destinationColIndex = data.findIndex(item=>item.id === destination.DroppableId)
            
            //Identifico en que columna me encuentro 
            const sourceCol= data[sourceColIndex]

            //Identifico columna de destino
            const destinationCol=data[destinationColIndex]

            //Para traer los datos de tasks, lo convierto a una lista para poderlo mapear y accedo a los elementos del objeto
            const sourceTask=[...sourceCol.tasks]
            const destinationTask=[...destinationCol.tasks]

            //Para hacer desaparecer la tarea del origen cuando la arrastro. Solo elimino una tarea con splice
            const [removed]=sourceTask.splice(source.index,1)
            //Para agregarlo en la nueva columna
            destinationTask.splice(destination.index,0,removed)

            //Actualizo la informacion(que fue agregado y que eliminado)
            data[sourceColIndex].task=sourceTask
            data[destinationColIndex].task=destinationTask
            
            //Paso la informacion a traves de setData
            setData(data)

     } 
    }
     return (<DragDropContext onDragEnd={onDragEnd} >
        <div>
        Hola

        </div>
    </DragDropContext>)
    
}

export default Kanban;