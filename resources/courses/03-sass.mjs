// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

import { createExerciseFiles } from '../create-course-files.mjs';

const COURSE = {
    name: "SASS",
    number: "03",
    filesExtension: "html",
    lessons: [
        "Store Data with Sass Variables",
        "Nest CSS with Sass",
        "Create Reusable CSS with Mixins",
        "Use @if and @else to Add Logic To Your Styles",
        "Use @for to Create a Sass Loop",
        "Use @each to Map Over Items in a List",
        "Apply a Style Until a Condition is Met with @while",
        "Split Your Styles into Smaller Chunks with Partials",
        "Extend One Set of CSS Styles to Another Element"
    ]
}

createExerciseFiles(COURSE);