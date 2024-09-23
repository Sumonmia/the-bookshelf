

export default function Faq() {
    return (
        <div className="mt-20 w-4/5 mx-auto space-y-3">
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div class="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React.</div>
                <div class="collapse-content">
                    <p>React lets you create components, reusable UI elements for your app. In a React app, every piece of UI is a component. React components are regular JavaScript functions except: Their names always begin with a capital letter. They return JSX markup.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
                <div class="collapse-content">
                    <p>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">What is the Virtual DOM, and how does React use it to optimize performance?</div>
                <div class="collapse-content">
                    <p>The virtual DOM is an in-memory representation of the real DOM, which helps improve the performance of web applications. Instead of directly manipulating the real DOM, changes are first made to the virtual DOM, which is then compared to the real DOM to apply only the necessary changes. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used.</div>
                <div class="collapse-content">
                    <p>The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components. In ReactJS, the data can be passed from one component to another component using these props, similar to how the arguments are passed in a function</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">What is "state" in React, and how does it differ from props?</div>
                <div class="collapse-content">
                    <p>State refers to the internal data of a component that can change over time, while props are used to pass data between components. By keeping these differences in mind and using them appropriately, developers can create robust and scalable applications with React.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">Explain the useState hook and provide an example of how it is used.</div>
                <div class="collapse-content">
                    <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
                </div>
            </div>
            <div class="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div class="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
                <div class="collapse-content">
                    <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
                </div>
            </div>
        </div>
    )
}
