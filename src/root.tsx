// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./styles/reset.css";
import "./styles/fluid.css";
import "./styles/modular-scale.css";
import "./styles/position.css";
import "./styles/typography.css";
import "./styles/color.css";
import "./styles/util.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
      <Title>(can)field notes</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
