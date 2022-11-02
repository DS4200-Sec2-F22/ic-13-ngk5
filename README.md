# ic-13
More practice with D3

Link to GitHub Pages: `[insert your clickable hyperlink here]`

## Purpose

The purpose of this assignment is to practice creating an interactive webpage with D3.  

Clone this repo and work locally. Be sure to push the final version of your code (and any significant updates along the way) before submitting. 

## Instructions

1. Resources to support this assignment are provided below in the Resources section.  

1. Create a GitHub Page for your repo and add the link to it above where you see `[insert your clickable hyperlink here]`. 

1. Using the provided index.html, d3.js libray, an external CSS file (no styling should be included in your html file), and an external js file (no js code should be included in your html file), please do the following: 
   - Title your webpage "ic-13". 
   - Create two columns on your webpage. 
   - In the first column, create a timeseries showing energy usage from 2016 to 2020 by Boston City Hall. (You may do some pre-processing of the city-hall.csv if you'd like.) 
   - In the second column, create a timeseries showing energy usage from 2016 to 2020 by Boston Central Library. (You may do some pre-processing of the library.csv if you'd like.) 
   - Add brushing and linking such that the user can brush over a time span in the Boston City Hall timeseries, and will see the selected time span highlighted in the Boston Central Library timeseries.
   - If you have time, add a third chart to the page. This chart should be a grouped bar chart that shows energy usage per-month for City Hall (one bar) and the Central Library (second bar). The months shown on the bar chart should correspond to the time span selected in the Boston City Hall timeseries. (You will need to do some data pre-processing to get the data needed for this chart.)     

1. Add a header to the bottom of your page. The header should say "Acknowledgements". Under this header, list of the resources you used to complete this assignment.

## Resources 

* [Brushing with D3](https://d3-graph-gallery.com/graph/interactivity_brush.html) 

* [HTML Page on w3schools](https://www.w3schools.com/html/default.asp). (On the left-hand side of the page there is a menu bar with links to various topics.) 

* [CSS Page on w3schools](https://www.w3schools.com/css/default.asp). (On the left-hand side of the page there is a menu bar with links to various topics.) 

**Note that there are different versions of D3 (we are using version 6), so make sure the tutorials you use are up-to-date (or you at least understand what is different about v6 versus older versions).**

* [Intro to D3 - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=svg)

* [D3 Data Joins - Creative Coding for the Web](https://www.fluidencodings.com/teaching-materials/cc-for-the-web/v1/page.php?pid=data-joins) 

* Intro to D3 in 10 basic examples: https://www.d3-graph-gallery.com/intro_d3js.html (highly recommend this resource)

* D3 Coursera by Enrico Bertini: https://www.coursera.org/learn/information-visualization-programming-d3js

* What is D3? https://d3js.org/

* Example D3 Charts: https://observablehq.com/@d3/gallery

* Interactive Data Visualization for the Web by Scott Murray: Available through Northeastern Library

* Tips and Tricks: https://leanpub.com/D3-Tips-and-Tricks/read (written for v3 but well written)

* Barcharts with D3: https://d3-graph-gallery.com/graph/barplot_basic.html 

## Data 

Data is from data.boston.gov. 

## Submission

* Be sure to push all changes to your repo and follow all instructions above. 
* Submit your assignment on Gradescope   
