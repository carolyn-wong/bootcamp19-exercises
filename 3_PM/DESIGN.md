App is the main component with state: {todo:[], display:[]} which has two sub-components -- left, right
    - left:
        - <h1> header component <h1>
        - list component <ul> takes todo as prop
            - conditional check for nothing to show
            - renders the list <li> which contains a string + delete button (as a separate component) </li>
                - delete <button> takes todo as a prop and returns editted todo via setState
    - right: 
        - userinput which takes todo as prop: is a <form> with <input> and <button> for submission and updates todo via setState
        - search which takes todo as prop: is a <form> with <input> that updates display via setState