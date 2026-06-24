const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => <p>{props.part.name + ": " + props.part.exercises}</p>;

const Content = (props) => (
  <>
    {props.parts.map((p) => (
      <Part part={p} key={p.id} />
    ))}
  </>
);

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  console.log('reduce method result:', total);
  return <b>This course has: {total} exercises</b>;
};


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
