---
description: This project is a html and js code combined.
---

# Key30

**Description:**

Key30 is a 30 random letters when reloaded, this is how



**Step 1:**

Create a html file on your hosting website.

**Step 2:**

Open the html file that you created, if you have a code viewer like vscode or others, if you haven't had a code viewer (if you new use notepad or your website hosting file viewer) now continue to step 3

**Step 3:**

Copy the code below and Paste it on your html file

<pre class="language-html" data-title="key30.html"><code class="lang-html">// Code by CJKitten on Github

&#x3C;!DOCTYPE html>
<strong>&#x3C;html>
</strong>  &#x3C;head>
    &#x3C;title>KEY30&#x3C;/title>
    &#x3C;script>
      function generateRandomLetters() {
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var randomLetters = "";
        for (var i = 0; i &#x3C; 30; i++) {
          var randomIndex = Math.floor(Math.random() * letters.length);
          randomLetters += letters.charAt(randomIndex);
        }
        document.getElementById("random-letters").innerHTML = randomLetters;
      }
      window.onload = function() {
        generateRandomLetters();
      };
    &#x3C;/script>
  &#x3C;/head>
  &#x3C;body>
    &#x3C;span id="random-letters">&#x3C;/span>
  &#x3C;/body>
&#x3C;/html>

</code></pre>

Now save the file and wait your website hosting to finish proccesing it, and done.
