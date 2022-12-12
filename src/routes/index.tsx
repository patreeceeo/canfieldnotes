import { cleanUp, IndexMeta, IndexDataProvider, IndexItem as IndexItemProps } from "./Index.data";
import Header from "~/components/Header";
import { For, Match, Switch } from "solid-js";
import { useRouteData } from "solid-start";
import Page from "~/components/Page";
import "./index.css"
// TODO For some reason the Comix component doesn't work in mdx-js unless I import it here
import "~/components/Comix";

export const routeData = IndexDataProvider;

export default function Index() {
  const {data, loading} = useRouteData<IndexMeta>();
  return (
    <Page withHeader>
      <Header />
      <Switch fallback={"Fail..."}>
        <Match when={loading}>Loading...</Match>
        <Match when={data}>
          <For each={cleanUp(data)}>{(item) => {
            return <IndexItem {...item} />
          }}</For>

        </Match>
      </Switch>
    </Page>
  );
}

function IndexItem(props: IndexItemProps) {
  return <div class="Index-item"><div class="Index-item-titleRow"><MaybeLink {...props}/><MaybeTimestamp {...props}/></div><MaybeDescription {...props}/></div>
}

function MaybeLink(props: IndexItemProps) {
  return props.title ? <h2 class="Index-item-title">{props.resource ? <a href={`/n/${props.resource}`}>{props.title}</a> : props.title}</h2> : <span/>
}
function MaybeDescription(props: IndexItemProps) {
  return props.description ? <p>{props.description}</p> : <span/>
}
function MaybeTimestamp(props: IndexItemProps) {
  return props.lastUpdate ? <p class="Index-item-timestamp">{props.lastUpdate}</p> : <span/>
}
