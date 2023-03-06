---
description: this code makes to place a video to the webpage
---

# Video Player Code

Easy code using only html file and a folder

Create a 'video' folder and place the video there and copy the video name file and replace the 'example' to the video name file

Copy Here:

```html
// Code by CJKitten on Github

<!DOCTYPE html>
<html>
<head>
  <title>Video</title>
  <link rel="preload" as="video" type="video/mp4" href="video/example.mp4" />
  <style>
    body {
      background-color: #000000;
      margin: 0;
      padding: 0;
    }
    
    video {
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <video controls>
    <source src="video/example.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</body>
</html>

```
