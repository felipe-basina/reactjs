import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey
                + ' ' + props.ingredients[igKey]
                + ' ' + JSON.stringify(props.ingredients));
            return [...Array(props.ingredients[igKey])]
                .map((_, index) => { // Ignora o valor, ficando apenas com o índice
                    return <BurgerIngredient key={igKey + index} type={igKey} />;
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []); // [] valor inicial = array vazio
    console.log(transformedIngredients);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          { transformedIngredients }
          <BurgerIngredient type="bread-bottom" />
      </div>
    );
};

export default burger;