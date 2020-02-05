import React from 'react'
import { NavLink } from 'react-router-dom'

class Drinks extends React.Component {
  state = {
    drinks: null
  }

  componentDidMount() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.props.match.params.categories}`)
      .then(response => response.json())
      .then(response => {
        this.updateDrinks(Object.values(response)[0])
      })
      .catch(console.error)
  }


  updateDrinks(drinks) {
    const arrDrinks = []
    drinks.map(cocktail => arrDrinks.push(cocktail))
    this.setState({
      drinks: arrDrinks
    })
  }

  render() {
    const { drinks } = this.state;
    return (
      <div>
        <p className="button_back"><NavLink to="/">Back</NavLink></p>
        <p className="name">{this.props.match.params.categories}</p>
        <hr />
        <div id="contet">
          {!drinks ? <p className="name">Not yet</p> : drinks.map(cocktail =>
            <div className="beer">
              <p><img src={cocktail.strDrinkThumb} alt="beer" style={{ width: "150px" }} /></p>
              <p className="strDrink">{cocktail.strDrink}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Drinks