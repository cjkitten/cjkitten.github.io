---
description: A switch that changes the site to color black.
---

# Color Changing Webpage

**Note**

You could change the color of the webpage by changing the code, find the 'black' to the color you want.



**Here's what you need**

* Create a HTML File
* and a web hoster for you website
* Some tools to open the file, like vscode, notepad, atom, or else.



**Step 1:**

Open the HTML File and paste this code the HTML file.

```html
// Code by CJKitten on Github

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:100&display=swap">
    <title>Change Background Color Button</title>
    <style>
      body {
        background-color: #f1f1f1;
        transition: background-color 0.5s ease-in-out;
        font-family: 'JetBrains Mono', monospace;
        font-weight: 100;
      }

      .switch {
        position: fixed;
        /* set position to fixed */
        bottom: 20px;
        /* position at bottom */
        left: 20px;
        /* position at left */
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: auto;
        left: 0;
        right: auto;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
      }

      #change-text {
        font-size: 24px;
      }

      input:checked+.slider {
        background-color: black;
      }

      input:checked+.slider:before {
        transform: translateX(26px);
        background-color: white;
        /* change color of the switch when enabled */
      }

      input:focus+.slider {
        box-shadow: 0 0 1px black;
      }
    </style>
  </head>
  <body>
    <h1 id="change-text" style="color: #000">This text changes with the background color!</h1>
    <label class="switch">
      <input type="checkbox" onclick="changeColor()">
      <span class="slider"></span>
    </label>
    <script>
      function changeColor() {
        var body = document.body;
        var switchElement = document.querySelector('.switch');
        var text = document.querySelector('#change-text');
        if (body.style.backgroundColor === "black") {
          body.style.backgroundColor = ""; // change to default color
          switchElement.style.color = "black"; // change switch color to black when disabled
          text.style.color = "#000"; // change text color to black when background is default
        } else {
          body.style.backgroundColor = "black"; // change to black color
          switchElement.style.color = "white"; // change switch color to white when enabled
          text.style.color = "#fff"; // change text color to white when background is black
        }
      }
    </script>
  </body>
</html>
```

Then save it and done, let you host to do the thing.
