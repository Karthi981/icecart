import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, closeCart, deleteFromCart, openCart,reduceQuantityFromCart } from '../store/cartSlice';
import {
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import { IoMdAdd,IoIosRemoveCircle  } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

export default function Drawer({productList}) {

  const isCartOpen = useSelector((state) => state.carts.isCartOpen);
  
  const dispatch = useDispatch();

  const toggleDrawer =
    (open) =>
    (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      dispatch(open ? openCart() : closeCart());
    };

  const list = () => {
  const total = productList.reduce(
    (sum, product) =>
      sum +
      parseFloat(String(product.price).replace("$", "")) *
        (product.quantity || 1),
    0
  );

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: 400 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
      }}
      role="presentation"
    >
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 3 }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Your Cart
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productList.length} items in your bag
          </Typography>
        </Box>
      </Stack>

      <Divider />

      {/* Products */}
      <Box className="" sx={{ flex: 1, overflowY: "auto", px: 2 }}>
        {productList.length === 0 ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ height: "100%", py: 6 }}
            spacing={2}
            className='flex justify-center items-center'
          >
            <FaShoppingBag sx={{ fontSize: 200, color: "#bbb" }} />
            <Typography fontWeight={600}>
              Your cart is empty
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Add some delicious products to get started.
            </Typography>
          </Stack>
        ) : (
          <List disablePadding>
            {productList.map((product) => (
              <ListItem
                key={product.id}
                disableGutters
                sx={{ py: 2, alignItems: "flex-start" }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={product.image}
                    variant="rounded"
                    sx={{
                      width: 75,
                      height: 75,
                      bgcolor: "#f5f5f5",
                      borderRadius: 2,
                    }}
                  />
                </ListItemAvatar>

                <Box sx={{ flex: 1, minWidth: 0, ml: 1 }}>
                  <Typography
                    fontWeight={600}
                    sx={{ mb: 0.5 }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1.5 }}
                  >
                    ${parseFloat(String(product.price).replace("$", "")).toFixed(2)}
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                  >
                    <IconButton
                      size="small"
                      disabled ={product.quantity === 1}
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 1,
                      }}
                      onClick={() => dispatch(reduceQuantityFromCart(product))}
                    >
                      <IoIosRemoveCircle fontSize="small" />
                    </IconButton>

                    <Typography fontWeight={600}>
                      {product.quantity || 1}
                    </Typography>

                    <IconButton
                      size="small"
                      sx={{
                        border: "1px solid #ddd",
                        borderRadius: 1,
                      }}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      <IoMdAdd fontSize="small" />
                    </IconButton>
                  </Stack>
                </Box>

                <Box sx={{ textAlign: "right" }}>
                  <Typography fontWeight={700}>
                    $
                    {(
                      parseFloat(String(product.price).replace("$", "")) *
                      (product.quantity || 1)
                    ).toFixed(2)}
                  </Typography>

                  <IconButton
                    size="small"
                    color="error"
                    sx={{ mt: 1 }}
                    onClick={() => dispatch(deleteFromCart(product.id))}
                  >
                    <MdDeleteOutline className='fill:red-200' />
                  </IconButton>
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Footer */}
      {productList.length > 0 && (
        <Paper
          elevation={0}
          square
          sx={{
            borderTop: "1px solid #eee",
            p: 3,
            bgcolor: "#fafafa",
          }}
        >
          <Stack spacing={1.5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">
                Subtotal :
              </Typography>
              <Typography fontWeight={600}>
                ${total.toFixed(2)}
              </Typography>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography color="text.secondary">
                Shipping :
              </Typography>
              <Typography color="success.main" fontWeight={600}>
                Free
              </Typography>
            </Stack>

            <Divider />

            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" fontWeight={700}>
                Total
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                ${total.toFixed(2)}
              </Typography>
            </Stack>

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                bgcolor: "#171717",
                color: "#fff",
                py: 1.5,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#333",
                },
              }}
            >
              Checkout Now →
            </Button>

            <Typography
              variant="caption"
              color="text.secondary"
              textAlign="center"
            >
              Secure checkout · Free shipping
            </Typography>
          </Stack>
        </Paper>
      )}
    </Box>
  );
};

  return (
        <React.Fragment key={'right'}>
          <button onClick={toggleDrawer(true)}><FaShoppingCart className='fill-black hover:fill-red-400'/></button>
          <SwipeableDrawer
            anchor={'right'}
            open={isCartOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
  );
}
