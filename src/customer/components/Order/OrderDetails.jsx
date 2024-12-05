import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div >
           <h1 className='font-bold text-xl py-7'> Delivery Address </h1>
           <AddressCard />
        </div>

        <div className='py-20'>
          <OrderTracker activeStep={3} />
        </div>
{[1,1,1,1,1].map((item)=>  <Grid className='space-y-5' container>
          <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>
            <Grid item xs={6}>
              <div className='flex items-center space-x-2'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://imgs.search.brave.com/mUlF_vlOc-m_klJJf0uzj9O2mZcVXFHqmLcVNYPQnTI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5NjIwODQ4L3Iv/aWwvZTMxMDFhLzM3/NzQ1MDM1NjcvaWxf/NjAweDYwMC4zNzc0/NTAzNTY3X3Myejcu/anBn' />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>Hello Vegans</p>
                  <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: pink</span> <span>Size:M</span></p>
                  <p>Seller: linaria</p>
                  <p>$1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{color:deepPurple[500]}}>
                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 ' />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        </Grid>)}
       

    </div>
  )
}

export default OrderDetails
