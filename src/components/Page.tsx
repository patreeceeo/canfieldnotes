import "./Page.css";

export default function Page(props) {
  return (
    <main class={`Page ${props.withHeader ? "Page--withHeader" : ""}`}>
      {props.children}
    </main>
  );
}
