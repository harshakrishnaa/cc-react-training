// function ListComp() {
//     const drinks =['Tea','Coffee','Badam milk'];
//     const listitems = drinks.map((item,index) => <li key={index}>{item}</li>);

//     return (
//       <div>
//       {listitems}
//       </div>
//     );
//     }
    
  
// export default ListComp;
import React from "react";
const ListComp=["Mercedes","Audi","BMW"];
const ArrayList=()=>{
  <div>
    <ul>
      {
        carBrands.map((carBrands)=>{
          <li>{carBrands}</li>
        });
      }
    </ul>
  </div>
}
export default ListComp;