import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='m-5 p-2 bg-dark text-white border rounded'>
                <h2>How Does React Work?</h2>
                <p>
                    One of the biggest advantages of using React is that you can infuse HTML code with JavaScript.

                    Users can create a representation of a DOM node by declaring the Element function in React. The code below contains a combination of HTML and JavaScript:


                    You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className.

                    JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript.
                </p>
            </div>
            <div className='m-5 p-2 bg-dark text-white border rounded'>
                <h2>props and state difference.</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='m-5 p-2 bg-dark text-white border rounded'>
                <h2>useEffect in use different?</h2>
                <p>useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component</p>
            </div>
        </div>
    );
};

export default Footer;