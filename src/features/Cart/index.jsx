import { Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
import { cartItemsSelector, itemsCountSelector, totalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItems = useSelector(cartItemsSelector);
  const totalAmount = useSelector(totalSelector);
  const itemsCount = useSelector(itemsCountSelector);
  const dispatch = useDispatch();

  const handleAddToCartClick = () => {
    const action = addToCart({
      product: { id: 1, name: 'Áo sơ mi đẹp ghê :P', price: '50000' },
      quantity: 1,
    });
    dispatch(action);
  };

  console.log('Cart items:', itemsCount, cartItems);

  return (
    <Container>
      <Typography variant="h2">Your cart</Typography>
      <Typography variant="body1">TOTAL: {totalAmount}</Typography>

      <Button variant="contained" onClick={handleAddToCartClick}>
        Add to cart
      </Button>
    </Container>
  );
}

export default CartFeature;
