const Total = (props) => {
  let count = 0;
  props.parts.forEach((p) => (count += p.exercises));
  return <b>This course has: {count} exercises</b>;
};

export default Total;
