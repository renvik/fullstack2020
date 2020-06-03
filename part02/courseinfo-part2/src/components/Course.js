import React from 'react';

const Header = ({name}) => {
  return (
      <div>
                          
          <h3>{name}</h3>    
          
      </div>
  )
}

const Content = ({parts}) => (
      <>                             
        {parts.map(part => <Part key={part.name} name={part.name} exercises={part.exercises} />)}  
      </>
  )

const Course = ({ course }) => {
  return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts.map(part => part.exercises)} />
    </div>
  )
}

const Total = ({ parts }) => (
  <b>total of {parts.reduce((s, p) => s + p)} exercises  </b>          
  )


const Part = ({ name, exercises }) => (
      <p>{name} {exercises}</p>
  )

  export default Course