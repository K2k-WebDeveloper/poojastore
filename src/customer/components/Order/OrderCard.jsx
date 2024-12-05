import { Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://imgs.search.brave.com/1RbMgUEpxYO6zsCS2-hv7W54h-XmNwN0nA4b_Y-34P4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZXJ2/ZGhhcm0uY29tL2Nk/bi9zaG9wL2NvbGxl/Y3Rpb25zL0dhbmdh/bkphbF8zMTg1eF81/MDE3ZmQxMS1jNDQz/LTQ4ZGEtOWFiYy1l/MWZkYzE4MmFjNzFf/MjAwMHgyMDAwLmpw/Zz92PTE2ODE3MDg0/MDc' />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Hello vegans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>$1999</p>
            </Grid>
            <Grid item xs={4}>
                {true && 
                <div>
                     <p>
                    <FiberManualRecordOutlinedIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered On March 03
                    </span>

                </p>
                <p className='text-xs'>
                    Your Item Has Been Delivered
                </p>
                </div>}
                {false && <p>
                    <span>
                        Delivered On March 03
                    </span>
                </p>}
            </Grid>
        </Grid>
      
    </div>
  )
}

export default OrderCard
