const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  console.log('reduce method result:', total);
  return <b>This course has: {total} exercises</b>;
};

export default Total;
