---
layout: page
title: About
permalink: /about/
---


## As a conversation Starter 
Here are some places I am from.

<comment>
Flags are made using the Wikipedia site and JavaScript
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hi", "description": "California - where I live right now"},
        {"flag": "b/ba/Flag_of_Germany.svg", "greeting": "Hallo", "description": "Germany - 13 years"},
        {"flag": "9/9c/Flag_of_Denmark.svg", "greeting": "Hej", "description": "Denmark - where my relatives live"},
        {"flag": "b/bf/Flag_of_Bosnia_and_Herzegovina.svg", "greeting": "Ćao", "description": "Bosnia and Herzegovina - where my parents are originally from"},
    ]; 
    
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

## Education Recap

Currently I am a Freshman at Del Norte HS.
- I used to go to a danish elementary school, called Oksevejns Skole (SH, Germany)
- In second grade I switched to a german school, called UNESCO-Projektschule Flensburg (SH,Germany)
- After graduating elementary school I went to a Gymnasium, called Goethe Schule Flensburg (SH,Germany)
- When I moved to the US I graduated middle school at Oak Valley Middle School (CA)

### Some more facts about me
- I am fluent in four different languages including English, German, Danish, Bosnian/Croatian/Serbian
- My family is pretty big since I have 4 younger siblings.
- During my free time I spend time with my siblings, play Volleyball, read, do gymnastics, draw and play the piano

{% include utterances.html %}