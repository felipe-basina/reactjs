import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey
                + ' ' + props.ingredients[igKey]
                + ' ' + JSON.stringify(props.ingredients));
            return [...Array(props.ingredients[igKey])]
                .map((_, index) => { // Ignora o valor, ficando apenas com o índice
                    return <BurgerIngredient key={igKey + index} type={igKey} />;
                });
        });
    console.log(transformedIngredients);

    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          { transformedIngredients }
          <BurgerIngredient type="bread-bottom" />
      </div>
    );
};

export default burger;