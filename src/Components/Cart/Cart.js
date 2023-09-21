import classes from './Cart.module.css';

const Cart = props =>{
    const cartItems = (
      <ul className={classes['cartItems']}>
          {[{id: 'c1', amount: 2, price: 12.99}].map((item) => (
          <li>{item.name}</li>
          ))}
      </ul>
    );
    return(
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div>
                <button className={classes['buttonAlt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;