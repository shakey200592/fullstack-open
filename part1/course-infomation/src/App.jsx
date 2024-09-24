const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part
        part={props.course.parts[0].name}
        exercise={props.course.parts[0].exercises}
      ></Part>
      <Part
        part={props.course.parts[1].name}
        exercise={props.course.parts[1].exercises}
      ></Part>
      <Part
        part={props.course.parts[2].name}
        exercise={props.course.parts[2].exercises}
      ></Part>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part}:{props.exercise}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Total Number Of Exercises:{" "}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  );
};

export default App;
