'use client';

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Avatar,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './Button';


export default function CreatePostModal() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setContent('');
    setImage(null);
  };

  const handleSubmit = async() => {
    if (!content.trim()) return;
    try {
        const response = await fetch('https://dummyjson.com/posts/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: content,
            userId: '123', 
          }),
        });
    
        const result = await response.json();
    
        if (response.ok) {
          console.log(' Post saved:', result.post);
          handleClose();
        } else {
          console.error('Failed to save post:', result.error);
        }
      } catch (err) {
        console.error('Server error:', err);
      }
    handleClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <>
      <CustomButton onClick={handleOpen}>Create Post</CustomButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 550,
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: 3,
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6">Create Post</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <Avatar alt="User" src="/default-avatar.png" />
            <TextField
              placeholder="What's on your mind?"
              multiline
              rows={4}
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              variant="outlined"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <label>
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
              <CustomButton variant="outlined" size="small">
                Upload Image
              </CustomButton>
            </label>

            <div className="flex gap-2">
              <CustomButton onClick={handleClose} variant="outlined" size="small">
                Cancel
              </CustomButton>
              <CustomButton onClick={handleSubmit} size="small">
                Post
              </CustomButton>
            </div>
          </div>

          {image && (
            <Typography className="mt-2 text-sm text-gray-500">
              Selected Image: {image.name}
            </Typography>
          )}
        </Box>
      </Modal>
    </>
  );
}
