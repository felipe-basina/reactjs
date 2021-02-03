import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[OrderSummary] will update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey, idx) => {
                return <li key={idx}><span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                    {this.props.ingredients[igKey]}</li>
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchasedCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchasedContinued}>CONTINUE</Button>
            </Aux>
        );
    }

}

export default OrderSummary;
