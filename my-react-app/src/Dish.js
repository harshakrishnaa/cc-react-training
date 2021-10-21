
import React, {useState} from "react";
const list=[ { "item": "Rice", "type": "veg" }, { "item": "Fish", "type": "non-veg" }, { "item": "Meat", "type": "non-veg" }, { "item": "Dal", "type": "veg" }]

export default Dish;
function filterOnType(arr, type){
  return arr
  .filter((item)=>item.type===type)
  .map((item)=><li key={item.id}>{item.item}</li>);
}
const GroceryList =(props)=>{
    const [sortedList, setSortedList]=useState{list};
        function handleSort(){
            const sortedList={..list.sort((a,b=>a.item.localCompare(b.item))];
            setSortedList(sortedList);
        }
    return(
        <div className={styles.container}>
        <div className={styles.type}>
            <h3>Veg Items</h3>
            <ul>{filterOnType(list,"veg")}</ul>
            <button onCLick={handleSort}>Sort</button>
        </div>
        <div className={styles.type}>
            <h3>Non Veg Items</h3>
            <ul>{filterOnType(list, "non-veg")}</ul>
        </div>
        </div>
     );
};
export default GroceryList;
// const List=[ { "item": "Rice", "type": "veg" }, { "item": "Fish", "type": "non-veg" }, { "item": "Meat", "type": "non-veg" }, { "item": "Dal", "type": "veg" }]
// let NonVeg = groceryList.map((d) => {
//     if(d.type==="non-veg")
//     {
//         var nonveg=h.item;
//     }
//     return nonveg;
//     })
//     .filter((item)=>
//     {
//         return item!== undefined;
//     }
//     );
// let Veg = groceryList.map((d) => {
//     if(d.type==="veg")
//     {
//         var veg=d.item;
//     }
//     return veg;
//     })
//     .filter((item)=>
//     {
//         return item!== undefined;
//     }
//     );

// let Sort=()=>
// {   
// Veg=Veg.sort();
// NonVeg=NonVeg.sort();
// alert(`Sorted:Veg= ${Veg} Non-Veg= ${NonVeg}`);
// }
// function Dish() {
// return (
//     <div className="main">
//         <table>
//             <thead>
//               <tr>
//                 <th id="Veg">Veg</th>
//                 <th id="Non-Veg">Non Veg</th>
//               </tr>
//             </thead>
//             <tbody id="menu">     
//                 <tr>
//                   <td>{Veg[0]}</td>
//                   <td>{NonVeg[0]}</td>
//                 </tr>
//               <tr>
//                 <td>{Veg[1]}</td>
//                 <td>{NonVeg[1]}</td>
//               </tr>
//             </tbody>
//         </table>
//         <button onClick={Sort}>Sort</button>
//     </div>
  
// );
// }
