// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

import { createExerciseFiles } from '../create-course-files.mjs';

const COURSE = {
    name: "React and Redux",
    number: "06",
    filesExtension: "js",
    lessons: [
        "Getting Started with React Redux",
        "Manage State Locally First",
        "Extract State Logic to Redux",
        "Use Provider to Connect Redux to React",
        "Map State to Props",
        "Map Dispatch to Props",
        "Connect Redux to React",
        "Connect Redux to the Messages App",
        "Extract Local State into Redux",
        "Moving Forward From Here"
    ]
}

createExerciseFiles(COURSE);