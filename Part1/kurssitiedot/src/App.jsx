const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} exercises={part.exercises} name={part.name} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  return (
    <p>Number of exercises {parts.reduce((s, p) => s + p.exercises, 0)}</p>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

const CourseLines = (props) => {
  return (
    <div>
      {props.courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

const App = (props) => {
  const { courses } = props
  return <CourseLines courses={courses} />;
};

export default App;