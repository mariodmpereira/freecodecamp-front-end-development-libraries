// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript

import { createExerciseFiles } from '../create-course-files.mjs';

const COURSE = {
    name: "React",
    number: "04",
    filesExtension: "jsx",
    lessons: [
        "Create a Simple JSX Element",
        "Create a Complex JSX Element",
        "Add Comments in JSX",
        "Render HTML Elements to the DOM",
        "Define an HTML Class in JSX",
        "Learn About Self-Closing JSX Tags",
        "Create a Stateless Functional Component",
        "Create a React Component",
        "Create a Component with Composition",
        "Use React to Render Nested Components",
        "Compose React Components",
        "Render a Class Component to the DOM",
        "Write a React Component from Scratch",
        "Pass Props to a Stateless Functional Component",
        "Pass an Array as Props",
        "Use Default Props",
        "Override Default Props",
        "Use PropTypes to Define the Props You Expect",
        "Access Props Using this.props",
        "Review Using Props with Stateless Functional Components",
        "Create a Stateful Component",
        "Render State in the User Interface",
        "Render State in the User Interface Another Way",
        "Set State with this.setState",
        "Bind 'this' to a Class Method",
        "Use State to Toggle an Element",
        "Write a Simple Counter",
        "Create a Controlled Input",
        "Create a Controlled Form",
        "Pass State as Props to Child Components",
        "Pass a Callback as Props",
        "Use the Lifecycle Method componentWillMount",
        "Use the Lifecycle Method componentDidMount",
        "Add Event Listeners",
        "Optimize Re-Renders with shouldComponentUpdate",
        "Introducing Inline Styles",
        "Add Inline Styles in React",
        "Use Advanced JavaScript in React Render Method",
        "Render with an If-Else Condition",
        "Use && for a More Concise Conditional",
        "Use a Ternary Expression for Conditional Rendering",
        "Render Conditionally from Props",
        "Change Inline CSS Conditionally Based on Component State",
        "Use Array.map() to Dynamically Render Elements",
        "Give Sibling Elements a Unique Key Attribute",
        "Use Array.filter() to Dynamically Filter an Array",
        "Render React on the Server with renderToString"
    ]
}

createExerciseFiles(COURSE);