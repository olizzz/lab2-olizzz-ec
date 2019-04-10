# Lab 2: Quiz
## Olivia(Xinchen Zhao)

### 1. Description
My quiz page contains 4 questions, each with 6 answers, and 6 possible results. The logic for score is to take the most common response. To break the elements down into rubric sections on Canvas:

- questions: display 4 questions, header image, 6options
- answers: text(question 2) and image(other questions)
- answers: 4 display states, none, hover(zoom in image or larger text), clicked(brighter image or bold text), non-selected(fading image or text)
- calculated answer: use values to calculate(take the most common response in main.js) and show results(modal used)
- display error if not all filled out(modal used)
- styling focus: 
    - no unstyling radio buttons * hovers and clicks have animation/transition effects(zooming in image has transition effect) 
    - output is a modal and it is animated
    - mobile is supported
ec: complex score, multiple quizes, see focus areas for more
0.0 pts
javascript+json focus OR styling focus
choose 1 or both (ec) of these. js: * pulls in json and populates questions * we can edit json to see new/altered options styling: * no unstyling radio buttons * hovers and clicks have animation/transition effects * output is a modal, or a new page, or a scroll, it is not a alert, and it is animated. * mobile
1.0 pts

### 2. Extra Credits
1. Extra credit question mentioned in the lab assignment page: why might it be better for main.js to be placed at the bottom rather than in <head> ... </head>?
- Answer: Placing it at the bottom could increase page loading/rendering speed because anything before main.js will already be rendered when main.js is loaded. It also helps when main.js wants to access somthing rendered in the body of html since we need it to render before main.js is loaded.
2. I also did the json focus: json pull in code is in main.js but the following line is commented out. Uncomment it to see population of questions from json data.
    - //$('#main').html(text_string);

### 3. Source
This quiz is almost solely adapted from this buzzfeed quiz:https://www.buzzfeed.com/jessicamisener/whoooooopah?branch=show-quiz. I used its texts and photo contents for questions, answers, outcomes. But none of my html structure, CSS design and javascript logic are based upon this website.