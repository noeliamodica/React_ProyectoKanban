import {v4 as uuidv4} from "uuid"

const mockData=[
    { 
        id: uuidv4(),
        title: " 📋 Por hacer",
        tasks: [
            {
                id: uuidv4(),
                title: "Estudiar javascript"
            },

            {
                id: uuidv4(),
                title: "Inscribirse a curso de css"
            },
            {
                id: uuidv4(),
                title: "Iniciar curso de react"
            },
            
            
        ]
    },

    { 
        id: uuidv4(),
        title: " ⚒️ En progreso",
        tasks: [
            {
                id: uuidv4(),
                title: "Curso python"
            },

            {
                id: uuidv4(),
                title: "Revisar codigo de proyecto XX"
            },
            
    
        ]
    },
    { 
        id: uuidv4(),
        title: " ✔️ Completado",
        tasks: [
            {
                id: uuidv4(),
                title: "Curso HTML"
            },
  
    
        ]
    }


]

export default mockData;