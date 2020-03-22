### [Makers Academy](http://www.makersacademy.com) - Week 7 Project

Notes app challenge - original README [here](https://github.com/makersacademy/course/blob/master/further_javascript/00_challenge_track.md)
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

[Outline](#Outline) | [Specifications](#Specifications) | [User Stories](#User_Stories) | [Installation Instructions](#Installation_Instructions) | [Tech stack](#Tech_stack) | [Future work](#Future_work)

## <a name="Outline">Outline</a>

Build a single page web app using JavaScript.

## <a name="Specifications">Specifications</a>

Build a notes app in which users can make new notes and view existing notes.

## <a name="User_Stories">User Stories</a>

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

## <a name="Installation_Instructions">Installation Instructions</a>

### Prerequisite setup:
- Clone this repo to your local machine and cd into it
- Run the command `gem install bundle` (if you don't have bundler already)
- If you don't have homebrew installed, install it. [Instructions here](https://github.com/Homebrew/install)
- Install node with the command `brew install node`
- Install the project's dependencies with `npm install`

### Running the site
- Run the server with `node node_modules/http-server/bin/http-server -c-1 -p 9292`
- visit the site at http://localhost:9292

### Testing
- Open the SpecRunner file in your browser

## <a name="Tech_stack">Tech stack</a>

- HTML & CSS
- JavaScript
- NodeJS
- Custom built testing library

## <a name="Future_work">Future work</a>

On a revisit of the project, I would like to build in functionality for creating a new note via a form.