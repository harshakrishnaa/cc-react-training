const grocerList=[ { "item": "Rice", "type": "veg" }, { "item": "Fish", "type": "non-veg" }, { "item": "Meat", "type": "non-veg" }, { "item": "Dal", "type": "veg" }]
let nonVeg = groceryList.map((d) => {
    if(d.type==="non-veg")
    {
        var nonveg=h.item;
    }
    return nonveg;
    })
    .filter((item)=>
    {
        return item!== undefined;
    }
    );
let Veg = groceryList.map((d) => {
    if(d.type==="veg")
    {
        var veg=d.item;
    }
    return veg;
    })
    .filter((item)=>
    {
        return item!== undefined;
    }
    );

let Sort=()=>
{   
Veg=Veg.sort();
NonVeg=nonVeg.sort();
alert(`Sorted:Veg= ${Veg} Non-Veg= ${nonVeg}`);
}
function Dish() {
return (
    <div className="main">
        <table>
            <thead>
              <tr>
                <th id="Veg">Veg</th>
                <th id="non-Veg">Non Veg</th>
              </tr>
            </thead>
            <tbody id="menu">     
                <tr>
                  <td>{Veg[0]}</td>
                  <td>{nonVeg[0]}</td>
                </tr>
              <tr>
                <td>{Veg[1]}</td>
                <td>{nonVeg[1]}</td>
              </tr>
            </tbody>
        </table>
        <button onClick={Sort}>Sort</button>
    </div>
  
);
}


export default Dish;