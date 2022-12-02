import { IndexData, IndexDataProvider } from "./Index.data";
import "~/components/Index.css";
import Header from "~/components/Header";
import { For, Match, Switch } from "solid-js";
import { useRouteData } from "solid-start";

export const routeData = IndexDataProvider;

export default function Index() {
  const data = useRouteData<IndexData>();
  return (
    <main class="Index">
      <Header />
      <Switch fallback={"Failed to load markdown..."}>
        {/** TODO this should be data.loading but that causes "Unable to find DOM nodes for hydration key" error */}
        <Match when={!data}>Loading...</Match>
        <Match when={data}>
          <For each={data.docs}>{(doc) => {
            return <p>{doc.default}</p>
          }}</For>

        </Match>
      </Switch>
    </main>
  );
}
