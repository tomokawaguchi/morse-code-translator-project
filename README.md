# Morse Code Translator Project

This is a translator mini app that allows you to translate English to morse code or morse code to English. Upon click the circle arrow icon, you can swap the translation function. When you do so, the current field value are clear out if there is any.

For English to morse code translator, it covers 26 alphabets letters, 10 numbers(0~9) and additional 11 symbols as stored in data.js. When the character that are not listed in the data.js, it will outputs the results as replacement character `�` so that user can be notified which particular isn't valid. In terms of spacing, it translates as a user input.(e.g. 3 spaces converts 3 spaces in the result)

For morse code to English translator, it covers the same characters, numbers and symbols as per listed in the data.js and when invalid morse code is entered, it translates into replacement character `�`. Since the morse code is translated per character, any entered value between a single space is recognised as a single entry.(e.g. 'extremely' --> a single value)

As part of project, there are test cases written in Jest, mainly covering the helper functions. These are to ensure that translation logics execute as expected including the cases with invalid and random values.
