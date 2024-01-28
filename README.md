# Notepad

## Description

I created this application to test my knowledge of express.js. I've found this unit especially challenging, as it serves as my first foray into backend-esque programming. Much of this code was preexisting, with the directions requiring us to add GET and POST actions to a server.js file. I needed to find a way to dynamically add new notes to the existing notes list. Exsiting notes needed to be able to be re-pulled up, with a 'New Note' button rendering to the top in these instances. After adding the proper functionality in the server.js file, I've ensured that this notepad is functional and useful.

## Installation

My app is being hosted on Heroku here:
https://evening-lake-43204-4c14350ec551.herokuapp.com/

The repository can be accessed here:
https://github.com/ericlyn4s/notepad

## Usage

When booting up the app, you can see any pre-existing notes on the lefthand side. This list will include notes that you've previously added (if there are any). At any point you can select one of these notes on the lefthand side and it will pull it up in the main section. The application will automatically load a blank note for the user to create. Once you've added a title and body, a save button will appear for you to add it to your notes list. A clear button will also appear for you to clear out the new note and start from scratch. You can also add a new note by pulling up an existing note and hitting the 'New Note' button at the topright corner.

![landing page of this application, user creates a new note title and body](assets/images/Landing_page.png)
![new note is added to the lefthand column](assets/images/New_note.png)

## Credits

I had tutor sessions with Charlies Puentes-Matos on 1/17/2024 and 1/24/2024

## License

MIT License

Copyright (c) 2024 Eric Peterson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
