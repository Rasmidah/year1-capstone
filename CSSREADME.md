# Book Management System CSS Code Explanation
This document provides a detail explanation of CSS code of the Book Management system. The application is a simple yet complete book management built with HTML, CSS, and JavaScript.

### Table of Contents
1. [Global Reset and Box Model](#global-reset-and-box-model)
2. [Use of CSS Variables](#use-of-css-variables)
3. [Organized CSS Structure](#organized-css-structure)
4. [Responsive Design](#responsive-design)
5. [Typography Styling](#typography-styling)
6. [Color Scheme and Contrast](#color-schemes-and-contrast)
7. [Flexbox and Grid Usage](#flexbox-and-grid-usage)
8. [Button and Input Styling](#button-and-input-styling)
9. [CSS transition](#css-transition)
10. [Hover Effects](#hover-effects)
11. [Layout Container](#layout-container)
12. [Utility Classes](#utility-classes)
13. [Shadows and Borders](#shadows-and-borders)
14. [Theme Customization](#theme-customization)
15. [Naming Conventions](#naming-conventions)
16. [Cleanliness and Commenting](#cleanliness-and-commenting)

### CSS Styling
The CSS defines the visual appearance of the Book Management System.
```css
/* theme preference: dark and light */
.light-theme{
    --background-color: #f4f4f4;
    --book-card: #f4f4f4;
    --button-hover: #357ae8;
    --button-bg: #4285f4;
    --text-color: black;
    --border-color: white;
    --button-color: white;
    --timer-color : black;
}
.dark-theme{
    --background-color: black;
    --book-card: #171717;
    --button-hover: #484a94;
    --button-bg: #5a5eb9;
    --text-color: white;
    --border-color: black;
    --timer-color : white;
}

/* global reset */
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color:var(--background-color);
    max-width: 100vw;
    color: var(--text-color);
}

/* header styling */
.head-section{
    padding: 10px;
    display: flex;
    justify-content:space-between;
    background-color:var(--background-color);
}
h2{
    display: inline-block;
}
#theme{
    display: inline-block;
}
.sticky-navbar{
    position: sticky;
    top: 0;
}

/* searching section styling */
#searchInput{
    padding: 8px;
    font-size: 16px;
    width: 350px;
    max-width: 80%;
    border-radius: 10px;
    border-color: var(--border-color);
}
#searchButton{
    padding: 8px 16px;
    font-size: 16px;
    background-color: var(--button-bg) ;
    color: var(--button-color);
    border: none;
    cursor: pointer;
    border-radius: 10px;
}
#searchButton:hover{
    background-color: var(--button-hover);
}

/* main container styling */
.book-display{
    padding: 20px;
    background-color: #484a94;
}
#books-count{
    color: gray;
    font-size: 14px;
}
.books-container{
    margin: 20px;
}
#book-display{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 20px;
}
#noResults{
    margin: 10px;
    font-variant:small-caps ;
}

/* book card styling */
.book-card{
    background-color: var(--book-card);
    margin-top: 10px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.book-header{
    justify-items: center;
}
.book-card>p{
    text-align: center;
}
.book-img{
    width: 150px;
    margin: 0 auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
}

/* Form input styling */
.input-section{
    display: none;
    color: var(--text-color);
    padding:20px;
    background-color: var(--background-color);
    width: 20vw;
    position: fixed;
    bottom: 23px;
    left: 10px;
    border: 3px solid #f1f1f1;
    z-index: 9;
}
h4{
    font-size: 1.3em;
    margin-bottom: 10px;
    text-align: center;
}
.input-section>input{
    padding: 10px;
    border-radius: 10px;
    border-color: var(--border-color);
    margin-bottom: 25px;
    margin-top: 10px;
    display: block;
    width: 100%;
}

/* Buttons styling */
.open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    left: 10px;
    width: 20vw;
}
#addBook, #closeForm{
    width: 100%;
    padding: 8px 16px;
    font-size: 16px;
    background-color: var(--button-bg) ;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 5px;
}
#closeForm{
    background-color: red;
}
#addBook:hover{
    background-color: var(--button-hover);
}
.upload-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
}
.upload-button:hover {
    background-color: #2980b9;
}
/* preview container styling */
.preview-container {
    margin-top: 20px;
}
.preview-container>h2 {
    font-size: 1em;
}
.preview-image {
    max-width: 100%;
    max-height: 150px;
    border-radius: 5px;
    display: none;
    margin: 10px;
}
.status-text {
    margin-top: 10px;
    color: #555;
}
/* Responsive design */
@media (min-width: 481px) and (max-width: 888px){
    .head-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .search-container{
        margin-top: 10px;
    }
    #session-timer{
        display: none;
    }
    #book-display{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 20px;
    }
    .open-button{
        width: 30vw;
    }
    .input-section{
        width: 30vw;
    }
}
```

#### Global Reset and Box Model
```css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```
Uses universal selector with `box-sizing` and resets

#### Use of CSS Variables
```css
```

#### Organized CSS Structure
```css
/* theme preference: dark and light */
/* global reset */
/* header styling */
/* searching section styling */
/* main container styling */
/* book card styling */
/* Form input styling */
/* Buttons styling */
/* preview container styling */
/* Responsive design */
```
Groups each styles logically with comments.

#### Responsive Design
```css
/* Responsive design */
@media (min-width: 481px) and (max-width: 888px){}
```
Uses media quesries and flexible units

#### Typography Styling
```css
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
```
Consistent fonts throughout the web app.

#### Color Schemes and Contrast
```css
.light-theme{
    --background-color: #f4f4f4;
    --book-card: #f4f4f4;
    --button-hover: #357ae8;
    --button-bg: #4285f4;
    --text-color: black;
    --border-color: white;
    --button-color: white;
    --timer-color : black;
}
.dark-theme{
    --background-color: black;
    --book-card: #171717;
    --button-hover: #484a94;
    --button-bg: #5a5eb9;
    --text-color: white;
    --border-color: black;
    --timer-color : white;
}
```
Light and dark themes with good contrast via variables.

#### Flexbox and Grid Usage
```css
.head-section{
    display: flex;
    justify-content:space-between;
}
#book-display{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 20px;
}
```
Uses both flex and grid for layout control.

#### Button and Input Styling
```css
/* searching section styling */
#searchInput{
    padding: 8px;
    font-size: 16px;
    width: 350px;
    max-width: 80%;
    border-radius: 10px;
    border-color: var(--border-color);
}
#searchButton{
    padding: 8px 16px;
    font-size: 16px;
    background-color: var(--button-bg) ;
    color: var(--button-color);
    border: none;
    cursor: pointer;
    border-radius: 10px;
}
#searchButton:hover{
    background-color: var(--button-hover);
}
/* Form input styling */
.input-section{
    display: none;
    color: var(--text-color);
    padding:20px;
    background-color: var(--background-color);
    width: 20vw;
    position: fixed;
    bottom: 23px;
    left: 10px;
    border: 3px solid #f1f1f1;
    z-index: 9;
}
h4{
    font-size: 1.3em;
    margin-bottom: 10px;
    text-align: center;
}
.input-section>input{
    padding: 10px;
    border-radius: 10px;
    border-color: var(--border-color);
    margin-bottom: 25px;
    margin-top: 10px;
    display: block;
    width: 100%;
}

/* Buttons styling */
.open-button {
    background-color: #555;
    color: white;
    padding: 16px 20px;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 23px;
    left: 10px;
    width: 20vw;
}
#addBook, #closeForm{
    width: 100%;
    padding: 8px 16px;
    font-size: 16px;
    background-color: var(--button-bg) ;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 5px;
}
#closeForm{
    background-color: red;
}
#addBook:hover{
    background-color: var(--button-hover);
}
.upload-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    font-size: 16px;
}
.upload-button:hover {
    background-color: #2980b9;
}
```
Stylish, usable form controls.

#### CSS transition
```css
transition: background-color 0.3s, color 0.3s;
```
Allowing smooth transition when toggle theme.

#### Hover Effects
```css
#searchButton:hover{
    background-color: var(--button-hover);
}
#addBook:hover{
    background-color: var(--button-hover);
}
.upload-button:hover {
    background-color: #2980b9;
}
```
Visual feedback on interaction.

#### Layout Container
```css
.books-container {
    margin: 20px;
}
```
Clearly defined structural containers.

#### Utility Classes
```css
.light-theme{}
.dark-theme{}
.head-section{}
.sticky-navbar{}
.book-display{}
.books-container{}
.book-header{}
.book-card{}
.book-img{}
.input-section{}
.open-button{}
.upload-button{}
.preview-container{}
.preview-image{}
.status-text{}
```
Uses helpful classes to target a specific elements that needs the same styling.

#### Shadows and Borders
```css
#searchInput{
    border-radius: 10px;
    border-color: var(--border-color);
}
.book-card{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
```
Subtle shadows and borders for visual depth.

#### Theme Customization
```css
/* theme preference: dark and light */
.light-theme{}
.dark-theme{}
```
The entire design responds to `body` class, allowing toggle of themes.

#### Naming Conventions
```css
.book-card
.input-section
.upload-button
```
Use kebab-case, which is standard for CSS. Also descriptive and semantic.

#### Cleanliness and Commenting
Code is mostly clean, with minimal clutter. Groups each style logically with comments.


