const Header = (props) => <h1>{props.course}</h1>;
const Part = (props) => (<p>{props.part.name + ": " + props.part.exercises}</p>)
const Content = (props) => (
    <>
    {props.parts.map((p, i) => (<Part part={p} key={i}/>))}
  </>
);
const Count = (props) => {
let count = 0
props.parts.forEach(p => count += p.exercises)
return (
    <p>Number of exercises: {count}</p>
)
}


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

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Count parts={course.parts} />
    </div>
  );
};

export default App;
