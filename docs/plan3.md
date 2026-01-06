# Animated background grid

## Plan Overview

##### → Objective

I didn't know how to create an animated bavkground for the 404 page, and I wanted to link it to all of the images used in the project cards from the gallery at the homepage.

##### → Request

I want to create a grid of images that moves upwards in the background of my error 404 page. I wwill add a box manually afterwards with the 404 message so don't do that yet. I attached a reference image of the original gallery site so that the 404 background is similar (square boxes with an image each and thick black borders).

Edit: The grid has to be with squares, not rectangles, and they should remain 1:1 through the responsiveness of different devices. The boxes should have a solid 3px #000 border. You should also align all the boxes in the center so that they won't stick to the left side when the viewport changes.

## → Response

Perfect! Now you have:

- Background grid of images that continuously scrolls upward in an infinite loop
- Square grid items with thick black borders (matching your gallery style)

The images are randomly selected from your images folder. Just update the imageFiles array with your actual image filenames and you're all set!

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 - Page Not Found</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: #000;
        min-height: 100vh;
        overflow: hidden;
        font-family: "EB Garamond", serif;
      }

      .background-grid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 200%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        gap: 8px;
        animation: scrollUp 30s linear infinite;
      }

      @keyframes scrollUp {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-50%);
        }
      }

      .grid-item {
        width: 300px;
        height: 300px;
        border: 3px solid #000;
        overflow: hidden;
        background-color: #000;
        flex-shrink: 0;
      }

      .grid-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .content-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }

      @media (max-width: 768px) {
        .grid-item {
          width: 200px;
          height: 200px;
        }
      }
    </style>
  </head>
  <body>
    <div class="background-grid" id="backgroundGrid"></div>

    <div class="content-overlay">
      <!-- Your message box goes here -->
    </div>

    <script>
      // List of image filenames in your images folder
      const imageFiles = ["image1.jpg", "image2.jpg", "image3.jpg"];

      function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      }

      function populateGrid() {
        const grid = document.getElementById("backgroundGrid");
        const shuffled = shuffleArray(imageFiles);
        const itemCount = 40; // Enough items to fill double the viewport

        for (let i = 0; i < itemCount; i++) {
          const item = document.createElement("div");
          item.className = "grid-item";

          const img = document.createElement("img");
          img.src = `assets/images/${shuffled[i % shuffled.length]}`;
          img.alt = "Gallery image";

          item.appendChild(img);
          grid.appendChild(item);
        }
      }

      populateGrid();
    </script>
  </body>
</html>
```
