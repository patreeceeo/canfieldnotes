import { IndexDataProvider } from "./Index.data";
import "~/components/Index.css";
import Header from "~/components/Header";
import { Match, Switch } from "solid-js";
import { useRouteData } from "solid-start";

export const routeData = IndexDataProvider;

export default function Index(props) {
  const data = useRouteData<any>();
  return (
    <main class="Index">
      <Header />
      <Switch fallback={"Failed to load markdown..."}>
        {/** TODO this should be data.loading but that causes "Unable to find DOM nodes for hydration key" error */}
        <Match when={!data}>Loading...</Match>
        <Match when={data}>
          <p>{data.doc}</p>
        </Match>
      </Switch>
    </main>
  );
}
