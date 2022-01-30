// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

import { createExerciseFiles } from '../create-course-files.mjs';

const COURSE = {
    name: "Redux",
    number: "05",
    filesExtension: "js",
    lessons: [
        "Create a Redux Store",
        "Get State from the Redux Store",
        "Define a Redux Action",
        "Define an Action Creator",
        "Dispatch an Action Event",
        "Handle an Action in the Store",
        "Use a Switch Statement to Handle Multiple Actions",
        "Use const for Action Types",
        "Register a Store Listener",
        "Combine Multiple Reducers",
        "Send Action Data to the Store",
        "Use Middleware to Handle Asynchronous Actions",
        "Write a Counter with Redux",
        "Never Mutate State",
        "Use the Spread Operator on Arrays",
        "Remove an Item from an Array",
        "Copy an Object with Object.assign"
    ]
}

createExerciseFiles(COURSE);