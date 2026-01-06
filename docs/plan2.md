# Custom pointer icon

## Plan Overview

##### → Objective

I want to swap the mouse icon for a red dot. In order to maintain coherence, any other mouse icons (such as the pointer hand, which I was struggling with) should be a smaller, black dot.

##### → Request

I want to replace the default mouse cursor on my website with a small red dot for normal state. When hovering over links, buttons, or other interactive elements, the cursor should turn black and slightly smaller. The red and black dots are SVG images which I have already stored locally at with their right sizes. I need to apply these two cursor icons correctly: the red dot by default and the black one on any interaction. Make sure the hotspot of each cursor is centered.

Edit: The default hand pointer from appears for a split second before turning into the black dot, how can I prevent this?

## → Response

Yes — that “split second hand” happens because the browser applies the default pointer cursor immediately on hover, then your CSS overrides it. You can fix it by forcing your custom cursor on all interactive elements, not just :hover.

Here’s the cleanest approach:

```css
body {
  cursor: url("../images/Red-pointer.svg") 8 8, auto;
}

/* Red cursor by default for everything */
* {
  cursor: url("../images/Red-pointer.svg") 8 8, auto;
}

/* Black cursor for all interactive elements */
a,
a *,
button,
button *,
input,
label,
select,
textarea,
[role="button"],
[onclick],
[class*="card"],
[class*="click"],
[class*="hover"] {
  cursor: url("../images/Black-pointer.svg") 6 6, pointer !important;
}
```

Why this works:

- By default, browsers switch to the hand pointer on hover of links/buttons.
- If you explicitly set your custom cursor on the elements themselves, the hand never appears.
- Adding :hover and :focus ensures accessibility doesn’t override the cursor temporarily.

What this css provides:

- 6 6 and 8 8 hotspot in the center of the 12×12 and 16×16 dots
- Covers links, buttons, and common interactive elements
- Prevents the browser hand pointer from showing
