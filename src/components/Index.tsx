import "./Index.css";
import Header from "./Header";
import { Match, Switch } from "solid-js";
import { useRouteData } from "solid-start";

export default function Index(props) {
  const data = useRouteData<any>();
  return (
    <main class="Index">
      <Header />
      <Switch fallback={"Failed to load markdown..."}>
        <Match when={!data}>Loading...</Match>
        <Match when={data}>
          <p>{data.doc}</p>
        </Match>
      </Switch>
    </main>
  );
}
