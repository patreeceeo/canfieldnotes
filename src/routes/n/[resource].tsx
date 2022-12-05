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
          {data.default}
        </Match>
      </Switch>
    </Page>
  );
}
