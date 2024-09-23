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
      {props.part1.exercises + props.part1.exercises + props.part3.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={part1}
        exercises2={part2}
        exercises3={part3}
      ></Content>
      <Total part1={part1} part2={part2} part3={part3}></Total>
    </div>
  );
};

export default App;
