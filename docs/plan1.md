# Hero section background

## → Plan Overview

# Objective

I want to have a background image at the hero section, but I have been struggling to make it blend smoothly onto the next section. I'd also want it to not just be black and white, but to be a layer with the mix-blend-mode set to multiply, but I don't know how to do this.

# Request

I am building my portfolio website's hero section. The body of the site already has a beige gradient background applied, but I want the hero section to have a black-and-white background image that blends with the gradient behind it using a multiply effect, similar to the Photoshop multiply layer mode. I The bottom of the image should fade smoothly into transparency to avoid any rough transitions between sections. The hero section already fills the entire viewport height on desktop and mobile, so the background image should scale to cover the section without deforming. The solution should not affect the text opacity inside the hero, only the hero's background.

## → CSS provided

```css
.hero-section {
  position: relative;
  min-height: 100svh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 50px 40px;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image: url("../images/S0_Hero_BG1.jpg");
  background-size: cover;
  background-position: center;

  mix-blend-mode: multiply;

  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 0) 100%
  );

  z-index: 1;
  pointer-events: none;
}

.hero-section > * {
  position: relative;
  z-index: 2;
}

.hero-section {
  isolation: isolate;
}
```
