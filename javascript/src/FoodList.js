import React, { Component } from 'react';

// Displays the list of food items. 
// Also renders a form for food input 
// and will allow for items to be deleted   
export class FoodList extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        foodItem: '', 
        manufacturer:'', 
        foodList: new Map()
      }
    }
  
    // will take the key and value that need to be deleted 
    // from the map 
    handleDelete = (key, val) => {
      console.log("deleting item from map")
    }
  
    // handles the form being submitted 
    handleFormSubmit = (e) => {
      let newFoodList = this.state.foodList.set(this.foodItem, this.manufacturer);
      this.setState({
        foodItem: '',
        manufacturer: '',
        foodList: newFoodList
      })
      e.preventDefault(); 
      console.log(newFoodList)
    }
  
    render() {
      return (
      <div>
        <ul>
          {this.state.foodList.forEach((val,key,map) => 
            <div>
              <li>{key} from {val}</li>
              <button onClick={() => this.handleDelete(key,val)}>Delete</button>
            </div>  
          )}
        </ul> 
        <form onSubmit={(e) => {this.handleFormSubmit(e)} }>
            Food Item: 
            <input type="text" value={this.state.foodItem} 
              onChange={(e) => this.setState({foodItem: e.target.value})}
            /> 
            <br/> 
            Manufacturer:  
            <input type="text" value={this.state.manufacturer} 
              onChange={(e) => this.setState({manufacturer: e.target.value})}
            />
            <br/> 
            {/* Submit Button */ }
            <input type="submit" name="Submit" /> 
          </form>
      </div>
      );
    }
  }

 