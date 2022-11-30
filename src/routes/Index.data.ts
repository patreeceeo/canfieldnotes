import { createResource } from 'solid-js';
// TODO figure out how to use this
// import { createRouteData } from 'solid-js';
import { getApi } from 'data/src/index';

export const IndexDataProvider = () => {
  const [resource] = createResource(async () => {
    const doc = await getApi('en')
    return {doc};
  });
  return {
    get doc() {
      return resource()?.doc.default;
    },
    get loading() {
      return resource.loading;
    },
  }
};
