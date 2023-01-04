import "./Page.css";

export default function Page(props) {
  return (
    <main class={`Page mw-100 m-1-auto p-0-1 ${props.withHeader ? "Page--withHeader" : ""}`}>
      {props.children}
    </main>
  );
}
