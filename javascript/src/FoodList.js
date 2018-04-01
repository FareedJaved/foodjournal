import React, { Component } from 'react';


// Displays the list of food items.
// Note: FoodItems is a list of objects, see App.js for definition  
 export class FoodList extends Component {

   render() {
      
     return (
       <div>
         <ul>
         
           {this.props.foodList.map((food) => (
             <div key={food.id}>
                <li> 
                  {food.item} from {food.vendor}
                </li>
                <button onClick={() => {this.props.handleDelete(food.id)}}>
                  delete
                </button>
             </div>
           ))}
           
         </ul>
      </div>
     );
   }
 }