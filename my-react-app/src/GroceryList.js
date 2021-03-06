import React, {useState} from "react";

const list=[ { "item": "Rice", "type": "veg" }, { "item": "Fish", "type": "non-veg" }, { "item": "Meat", "type": "non-veg" }, { "item": "Dal", "type": "veg" }]


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


