# Morse Code Translator Project

:link:  https://gmorse-code-translator.tomok.dev


![project snapshot](https://github.com/tomokawaguchi/google-api-books-app-/blob/main/src/assets/project-snapshot.png?raw=true)



## Project Brief
### Aims
This task will require you to create a web page Morse Code translator. The focus of this project will be putting your code into modules and creating unit tests The User Interface will have to look good but should remain simple (additional features, ie. sounds, lights, etc, should only be added once the MVP has been completed.)

### MVP (conducted as Nology course work)

- Create a user interface that allows the user to either input some English text or some Morse Code

- Create JS functions that would allow the user to:

  - translate their English text into Morse Code
  - Morse Code into English text
  - Make sure to handle spaces properly (ie. there is 1 space between English words, but one space between Morse Code characters)

- Bonus: Handle other characters as well
- Bonus: Detect if a piece of text is english or morse and translate accordingly
- Split your code between data, logic functions and dom functions
- Develop unit tests for all of your logic functions
- Explore and discover edge cases in your code to further develop your tests

### Technical Implementation

This is a translator mini app that allows you to translate English to morse code or morse code to English. Upon click the circle arrow icon, you can swap the translation function. When you do so, the current field value are clear out if there is any.

**1. English to morce code translator**

For English to morse code translator, it covers 26 alphabets letters, 10 numbers(0~9) and additional 11 symbols as stored in data.js. When the character that are not listed in the data.js, it will outputs the results as replacement character `�` so that user can be notified which particular isn't valid. In terms of spacing, it translates as a user input.(e.g. 3 spaces converts 3 spaces in the result)

**1. Morce code to English translator**

For morse code to English translator, it covers the same characters, numbers and symbols as per listed in the data.js and when invalid morse code is entered, it translates into replacement character `�`. Since the morse code is translated per character, any entered value between a single space is recognised as a single entry.(e.g. 'extremely' --> a single value)

**3. Test Script in Jest**

As part of project, there are test cases written in Jest, mainly covering the helper functions. These are to ensure that translation logics execute as expected including the cases with invalid and random values.

### Refection

- In the process of refactoring my initial code, I was suggested to utilise the same method to translate one to another by original data and reversed data. Yet due to my setting of how to output the translation with spacing and `�` symbols, I was unable to do so. However, I thought it was very efficient approach. 
- Testing and writing testing cases was definitely something new to me. However I could see the power of TDD as it made me realised error/edge cases mulitiple time so that I could refactor my code. 

### Future Goals

- It would be great if I could expand the translation data base.
