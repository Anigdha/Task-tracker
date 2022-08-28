// const tasks = [
//     {
//         id : 1,
//         text : 'Doctor appointment',
//         day : 'feb 5 at 2:30 pm',
//         reminder : true
//     },
//     {
//         id : 2,
//         text : 'Meeting at school',
//         day : 'feb 7 at 1:30 pm',
//         reminder : true
//     },
//     {
//         id : 3,
//         text : 'Food shopping',
//         day : 'feb 5 at 2:30 pm',
//         reminder : false
//     }
// ]
// const Tasks = () => {
//     return (
//         <>
//             {
//                 tasks.map((task) => {
//                     return (
//                     <h3 key = {task.id} >
//                         {task.text}
//                     </h3> 
//                     )
//                 })
//             }
//         </>   
//     )
// }

// export default Tasks



const Tasks = ({tasks}) => {
    return (
      <>
        {
            tasks.map((task) => {
            return (
            <h3 key = {task.id} >
                {task.text}
            </h3> 
            )
        })
    }
</>   
)
}

export default Tasks