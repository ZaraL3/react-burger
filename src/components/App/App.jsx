import React from 'react';
import '../../App.css'
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
      items: []
    }
  };

  componentDidMount() {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(
            {
              hasError: true,
              items: result.data
            }
          );
        },
        (error) => {
          this.setState(
            {
              hasError: true,
              error
            }
          );
        }
      )
  }
  render() {
    const { error, hasError, items } = this.state;
    if (error) {
      return
      <p> ERROR {error.massage}</p>
    } else if (!hasError) {
      return <p> Loading... </p>
    } else {
      return (

        <>
          <AppHeader />
          <div className='page'>
            <main className="section">
              <BurgerIngredients items={items} />
              <BurgerConstructor items={items} />
            </main>
          </div>
        </>

      )
    }
  }
}


export default App;
