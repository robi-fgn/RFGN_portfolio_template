# Custom pointer icon

## Plan Overview

### → Objective

I want to swap the mouse icon for a red dot. In order to maintain coherence, any other mouse icons (such as the pointer hand, which I was struggling with) should be a smaller, black dot.

### → Request

I want to replace the default mouse cursor on my portfolio site with a small red dot for normal state. When hovering over links, buttons, or other interactive elements, the cursor should turn black and slightly smaller. The red and black dots are SVG images which I have already stored locally at with their right sizes. I need to apply these two cursor icons correctly and the solution to prevent the default hand pointer from appearing for a split second before turning into the black dot. Make sure the hotspot of each cursor is centered.

## → CSS provided

---

```css
body {
  cursor: url("../images/Red-pointer.svg") 8 8, auto;
}

/* Black dot cursor for ALL other cursor types */
* {
  cursor: inherit;
}

*:not(body) {
  cursor: url("../images/Black-pointer.svg") 6 6, pointer !important;
}

/* Keep red cursor for non-interactive areas */
body
  *:not(a):not(button):not(input):not(label):not(select):not(textarea):not(
    [role="button"]
  ):not([onclick]):not(.category-card):not(.project-card):not(
    [class*="hover"]
  ):not([class*="click"]) {
  cursor: url("../images/Red-pointer.svg") 8 8, auto !important;
}
```
