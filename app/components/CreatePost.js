"use client"
import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Stack } from '@mui/material';

export default function CreatePost({ onSubmit }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      content,
      image,
      createdAt: new Date().toISOString(),
    };

    if (onSubmit) onSubmit(newPost);

    setContent('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Card className="w-full max-w-xl mx-auto mt-6 shadow-md">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Create Post
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="What's on your mind?"
              multiline
              rows={4}
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              variant="outlined"
            />

            <Button variant="contained" component="label">
              Upload Image
              <input type="file" hidden onChange={handleImageChange} />
            </Button>

            {image && <Typography variant="body2">Selected: {image.name}</Typography>}

            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
