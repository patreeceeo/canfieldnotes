import { createResource } from 'solid-js';
// TODO figure out how to use this
// import { createRouteData } from 'solid-js';
import { DocFile, getIndex } from 'data/src/index';

export type IndexData = {
  docs: DocFile[]
}

export const IndexDataProvider = () => {
  const [resource] = createResource(async () => {
    const docs = await getIndex('en')
    return {docs};
  });
  return {
    get docs() {
      return resource()?.docs
    },
    get loading() {
      return resource.loading;
    },
  }
};
