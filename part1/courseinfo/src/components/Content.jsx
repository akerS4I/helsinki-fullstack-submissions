import Part from "./Part";

const Content = (props) => (
  <>
    {props.parts.map((p) => (
      <Part part={p} key={p.id} />
    ))}
  </>
);

export default Content;
