import React from 'react'
import { NavLink,HashRouter } from 'react-router-dom'
const API = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
const getFilter = () => fetch(API)
  .then(response => response.json());

 class Filter extends React.Component {
  state = {
    drinksList: null
  }
  componentDidMount(){
    getFilter()
      .then(response => {
          this.updateCategories(Object.values(response)[0])
      })
      .catch(console.error);
  }

  updateCategories(categories){
    const strCategories = []
    categories.map(categ => strCategories.push(categ['strCategory']))
    this.setState({
      drinksList: strCategories
    })
  }

  render() {
    const {drinksList } = this.state;
    return (
      <div className="main">
        <HashRouter>
      <div className="filter_block">
        { !drinksList ? <p>Loading...</p> : drinksList.map(cat => {
          return (
            <p className="filter"  key={cat}>
              <NavLink   to={`/${cat}`} ><input type="checkbox"  name="one"/></NavLink >{cat}</p>
                )
            })
        }
      </div>
      </HashRouter>
      </div>
    )
  }
}

export default Filter
