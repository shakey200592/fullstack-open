import React from "react";
import Header from "./header";
import Part from "./part";

const Content = ({ course }) => {
  return (
    <>
      <div>
        {course.map((item) => (
          <div key={item.id}>
            <Header name={item.name}></Header>
            {item.parts.map((part) => (
              <Part
                key={part.id}
                name={part.name}
                exercises={part.exercises}
              ></Part>
            ))}
            <p>
              Total Exercises:{" "}
              {item.parts.reduce((acc, val) => acc + val.exercises, 0)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
