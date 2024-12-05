import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
    <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
            className="w-full h-full object-top"
            src="https://imgs.search.brave.com/eFyoMUhLh1RXlM7iYFU0NKMGof9J3Zwvibgiv_zsEks/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZXJ2/ZGhhcm0uY29tL2Nk/bi9zaG9wL2NvbGxl/Y3Rpb25zL0dhbmdh/bkphbF8zMTg1eF81/MDE3ZmQxMS1jNDQz/LTQ4ZGEtOWFiYy1l/MWZkYzE4MmFjNzFf/MjAwMHgyMDAwLmpw/Zz92PTE2ODE3MDg0/MDc"
            />
        </div>

        <div className="ml-5 space-y-1">
            <p className="font-semibold">Hello Vegans</p>
            <p className="opacity-70">Size: L,white</p>
            <p className="opacity-70">Seller: K2k it supports</p>   
        
            <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className="font-semibold">$199</p>
                <p className="opacity-50 line-through">$211</p>
                <p className="text-green-500 font-semibold">5% Off</p>
            </div> 
      </div>
      
    </div>
    <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
            <IconButton>
                <RemoveCircleOutlineOutlined />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
                <IconButton sx={{color:"#FF9829"}}>
                    <AddCircleOutlineOutlined />
                </IconButton>
            
        </div>
        
        <div>
            <Button sx={{color:"#FF9829"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
