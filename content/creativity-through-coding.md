---
title: Learning Blocks
layout: page
last_modified_at: 2019-01-13
permalink: creativity-through-coding/learning-blocks
categories: [creativecode]
---

```
JS TweenMax course:
1 - intro corso + html/css basic + your profile page
2 - SVG basic + draw a face, draw a home
3 - intro gsap basic + face transition + devtool
3 - draw a grid
4 - ripasso gsap/devtool, function, jquery, click, random (grid interactive) 
5 - AI export (casa: face interactive with AI)
6 - variabile (shared var + es using easing) incremento (rotation), color tool, mover (left/right, up/down, scale, (sostituire circle with ship) speed, color based on speed),     (casa faccia configurabile elemento animato)
7 - breve ripasso variabili, condizioni:(es: pallina controllata, move and rewind, pannello toggle)
8 - svgdraw + svgmorph + svgpath
9 - audio + netlify
10 - brief
```



```

--- TIPS for next IED esame
- size of the SVG matter!!! pay attention
- fonts! how to solve
- delivery: zip file of the pen in drive folder
----
```



### Resources

- [Page of Codepen](https://codepen.io/GreenSock/full/OPqpRJ/) where to grab the Premium plugin of TweenMax to try them out

### Lesson 1 (intro, tools&libs)

- Outline course

- Precedenti corsi progr? Illustr/Figma? dopo .. Codepen account?

- Reason why code for designer and prototype

- Sketch mode (explanation, demostration, demo)

- Goal of the course (understanding programming potential in creative context)

- Tools overview (Codepen, Repl.it)

- Technologies we're going to use
  - SVG, HTML, CSS selection
  - TweenMax, jQuery
  - Adobe Illustration / Figma
  - Programming paradigms: **variable**, **functions**, **condition**, **loop**

- **HTML** first general explanation

  - HTML tags -> content structure
  - CSS props style first (color, back, font, size, padding)

- **Exercise**:

  - Make a basic personal-info web page on codepen

  

### Lesson 2 (animation the basics)

- appello, note su homework, ask for esercizi + chrome
- Refresh **HTML** basics and **CSS** selection
- SVG tag
- The coordinate system, the rect element with property
- **Exercise**: 
  - make a grid of rects
- **SVG** elements (rect, circle, line, g, polygon, text, image)
- **Comments** on different languages
- **Exercise**:
  - Make a face with the primitive shapes (circle, rect, lines, polygon)
- Intro to **DevTool** for debugging purposes
- **??Homework**: Make a House in SVG with Basic shapes
- **TweenMax** basics (to,from,x,y,scale,rotation,delay,origin,ease)
- **Exercise**: 
  - That face make transition-in
- **Homework**: 
  - Animate the face
  - Make a House in SVG with Basic shapes

### Lesson 3 (interaction the basics)

- Recap gsap, to/from
- What is a **Function**
- jQuery for basic *click* interactions
- **Exercise:** 
  - Little graphic composition explorable tool, 4 shapes, 4 btn, + reset 
  - The face now can goes out upon click 
- What is **Random**
- Explore further events (mouseenter, mouseleave)
- **Exercise:** 
  - The face now can be manipulate with the mouse using the random generator for each element
- What is a **Variable**
- The **THIS** special variable in mouse events
- **Exercise:** 
  - The face now can be manipulate with all the mouse events exploiting the THIS variable

### Lesson 4 (more transitions/interactions)

- The **viewBox** attribute
- The **stagger** feature and the **Set**
- **Exercise:** 
  - Make a grid of elements that enter in with **from**
  - Make the same grid that enter on click
  - Use the THIS mouse event to manipulate elements
- Use a **numeric variable**
- **Exercise:**
  - incrementing a number: make element bigger on clicks
  - increm / decrem same number

### Lesson 5 (Illustrator as asset editor)

- Prepare a file in Adobe Illustrator
- Export options
- Copy/Paste the SVG code
- **Exercise:**
  - make a grid in AI e staggerIn the elements
  - make them interactive
- Loading the SVG with JS
- The find() function to subselect elements
- **Exercise:**
  - make a row of complex elements, staggerIn, make them interactive, use THIS to manipulate with Random

### Lesson 6 (UI)

- UI exploration with the same techniques (modal, offcanvas, tabs, slider)
- **Exercise:**
  - make a modal + offcanvas
- Load and play an **Audio** file, TweenMax fo volume
- **Exercise:**
  - make a modal to allow the user choose 3 audio sample



[Clock](https://github.com/golanlevin/lectures/tree/master/lecture_clock) exercise? Pattern? Grid [loop](https://github.com/golanlevin/lectures/tree/master/lecture_loops)

### **Exercise**: generative logo, btn to change them random, or [loop](https://github.com/golanlevin/lectures/tree/master/lecture_loops) graphic composition



### Lesson 7 (more logic)

- What is a **Condition**
- The boolean value and the offcanvas
- **Exercise:**
  - make two off panel (up and down)
- The **clone** function
- **Exercise:**
  - make a panel to generate from 3 elements
- Text&Fonts



### Lesson 8 (more goodies)

- Draw, Morph and Follow
- **Exercise:**
  - Make a two selector, draw and morph by click
  - Make cloned elements following a path (baloons)

### Lesson 9x

- What is a **State**
- Set a state variable to any element (data() + THIS)
- Masking
- Callback functions
- Dynamic text
- The Date object
- Repeat & Yoyo
- TweenMax Drag
- Mousemove event and coordinate conversion

### Lesson x

- saving and loading data in the cloud