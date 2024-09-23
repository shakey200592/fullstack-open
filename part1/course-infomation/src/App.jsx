const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <>
      <Part part={props.part1.name} exercise={props.part1.exercises}></Part>
      <Part part={props.part2.name} exercise={props.part2.exercises}></Part>
      <Part part={props.part3.name} exercise={props.part3.exercises}></Part>
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
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course}></Header>
      <Content
        part1={parts[0]}
        part2={parts[1]}
        part3={parts[2]}
        exercises1={parts[0]}
        exercises2={parts[1]}
        exercises3={parts[2]}
      ></Content>
      <Total part1={parts[0]} part2={parts[1]} part3={parts[2]}></Total>
    </div>
  );
};

export default App;
