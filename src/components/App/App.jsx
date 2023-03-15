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
      data: []
    }
  };

  componentDidMount() {
    fetch("https://norma.nomoreparties.space/api/ingredients")
    .then(res => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
  })
      .then(
        (result) => {
          this.setState(
            {
              hasError: true,
              data: result.data
            }
          );
        })
        .catch((error) => {
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
    const { error, hasError, data } = this.state;
    if (error) {
      return <p> ERROR {error.massage}</p>
    } else if (!hasError) {
      return <p> Loading... </p>
    } else {
      return (

        <>
          <AppHeader />
          <div className='page'>
            <main className="section">
              <BurgerIngredients  data={data}/>
              <BurgerConstructor data={data} />
            </main>
          </div>
        </>

      )
    }
  }
}


export default App;
