import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div>
            <div className='question'>
                <h5>What are the different ways to manage a state in a React application?</h5>
                <p><span>Ans:</span>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.</p>
            </div>
            <div className='question'>
                <h5>How does prototypical inheritance work?</h5>
                <p><span>Ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='question'>
                <h5>What is a unit test? Why should we write unit tests?</h5>
                <p><span>Ans:</span>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='question'>
                <h5>React vs. Angular vs. Vue?</h5>
                <p><span>Ans:</span>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.</p>
            </div>
        </div>
    );
};

export default Blog;