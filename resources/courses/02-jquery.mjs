// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

import {createExerciseFiles} from '../create-course-files.mjs';

const COURSE = {
    name: "jQuery",
    number: "02",
    filesExtension: "html",
    lessons: [
        "Learn How Script Tags and Document Ready Work",
        "Target HTML Elements with Selectors Using jQuery",
        "Target Elements by Class Using jQuery",
        "Target Elements by id Using jQuery",
        "Delete Your jQuery Functions",
        "Target the Same Element with Multiple jQuery Selectors",
        "Remove Classes from an Element with jQuery",
        "Change the CSS of an Element Using jQuery",
        "Disable an Element Using jQuery",
        "Change Text Inside an Element Using jQuery",
        "Remove an Element Using jQuery",
        "Use appendTo to Move Elements with jQuery",
        "Clone an Element Using jQuery",
        "Target the Parent of an Element Using jQuery",
        "Target the Children of an Element Using jQuery",
        "Target a Specific Child of an Element Using jQuery",
        "Target Even Elements Using jQuery",
        "Use jQuery to Modify the Entire Page"
    ]
}

createExerciseFiles(COURSE);