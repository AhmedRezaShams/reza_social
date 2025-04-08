"use client"
import React from 'react';
import { Button } from '@mui/material';
import CreatePost from './CreatePost';

export default function CustomButton({
  children,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  size = 'medium',
  ...props
}) {
  return (
  <div className='flex flex-col content-center items-center justify-center mb-6 mt-6'>
      <Button 
    
      variant={variant}
      color={color}
      onClick={CreatePost}
      fullWidth={fullWidth}
      size={size}
      {...props}
      sx={{
        textTransform: 'none',
        borderRadius: '12px',
        fontWeight: '600',
        px: 3,
        py: 1.5,
        ...props.sx,
      }}
    >
      {children}
    </Button>
  </div>
  );
}
