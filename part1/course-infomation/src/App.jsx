const App = () => {
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

    const totalExercises = () => {
        return course.parts.reduce((acc, current) => acc + current.exercises, 0)
    }

    return (
        <>
            <h1>{course.name}</h1>
            <p>{course.parts[0].name} {course.parts[0].exercises}</p>
            <p>{course.parts[1].name} {course.parts[1].exercises}</p>
            <p>{course.parts[2].name} {course.parts[2].exercises}</p>
            <p>Total Exercises: {totalExercises()}</p>
        </>
  )
}

export default App