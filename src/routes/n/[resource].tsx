import { useRouteData } from "solid-start";
import { Match, Switch } from "solid-js";
import { Meta, DataProvider } from './Resource.data'
import Page from "~/components/Page";
import Header from "~/components/Header";

export const routeData = DataProvider;

export default function Index() {
  const {data, loading} = useRouteData<Meta>();
  return (
    <Page withHeader>
      <Header />
      <Switch fallback={"Fail..."}>
        <Match when={loading}>Loading...</Match>
        <Match when={data}>
          <aside>Doing it live: Like every note, this is and probably forever will be a living, evolving document, as I figure out what exactly I'm tring to say &hellip;</aside>
          {data.default}
        </Match>
      </Switch>
    </Page>
  );
}
