import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    return (
        <div>
                            
            <h1>{props.course}</h1>    
            
        </div>
    )
}

const Content = (props) => {
    return (
        // kutsuu part-komponenttia, App antaa Contentille propsin  
        <div>                             
            <Part nimi = {props.parts[0].name} harjoitukset = {props.parts[0].exercises}/>    
            <Part nimi = {props.parts[1].name} harjoitukset = {props.parts[1].exercises}/>
            <Part nimi = {props.parts[2].name} harjoitukset = {props.parts[2].exercises}/>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
        {props.nimi} {props.harjoitukset}
        </p>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>
                This is Total {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises }
            </p>
        </div>
    )
}
// App-komponentissa on kaikki data (kurssinimet, tehtävätLkm)
// 1.5 Array is in the object "course"
const App = () =>   {
    const course = {
    name: 'Half Stack application development',
    parts: [
     {    
        name: 'Fundamentals of React',
        exercises: 10
     },
     {
        name: 'Using props to pass data',
        exercises: 7
     },
     {
        name: 'State of a component',
        exercises: 14 
     } 
    ]
}
    return (
    
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts} />
            <Total course={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

