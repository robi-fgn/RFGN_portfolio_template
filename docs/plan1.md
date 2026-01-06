# Hero section background

## Plan Overview

##### → Objective

I want to have a background image at the hero section, but I have been struggling to make it blend smoothly onto the next section. I'd also want it to not just be black and white, but to be a layer with the mix-blend-mode set to multiply, but I don't know how to do this.

##### → Request

I am building my portfolio website's hero section. The body of the site already has a beige gradient background applied, but I want the hero section to have a black-and-white background image that blends with the gradient behind it using a multiply effect, similar to the Photoshop multiply layer mode. The bottom of the image should fade smoothly into transparency to avoid any rough transitions between sections. The hero section already fills the entire viewport height on desktop and mobile, so the background image should scale to cover the section without deforming.

## Response

##### → 1st Answer

This is the cleanest solution using a CSS mask.

Add this to the "::before" pseudo-element:

```css
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

  pointer-events: none;
}
```

What this does:

- Top 70% → fully visible
- Bottom 30% → smoothly fades to transparent
- No hard cutoff
- Next section blends cleanly

##### → Edit

Edit: The transparency-fade effect should not affect the text opacity inside the hero, only the hero's background. Please provide me the correct code to avoid this and briefly explain to me why it's happening.

##### → 2nd Answer

Yes — this is expected with your current setup, and it’s fixable.
What’s happening:

- The mask is applied to the ::before element ✔
- But your text is visually blending with it because it sits in the same stacking context and the blend/mask affects how layers composite

The fix is to separate the layers explicitly using z-index.

Correct layer order (image → text):

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

Why this fixes it:

- The masked image stays on layer 1
- All text/content is forced to layer 2
- The mask no longer affects text opacity
- Blend mode only applies to the image
