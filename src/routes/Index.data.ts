import { createResource } from 'solid-js';
// TODO figure out how to use this
// import { createRouteData } from 'solid-js';
import { getIndex, IndexItem } from 'data/src/index';
export { IndexItem } from 'data/src/index';


export type IndexMeta = {
  data: IndexDataRaw
  loading: boolean
}
type IndexDataRaw = Array<{default?: Array<IndexItem>}>

export function cleanUp(data: IndexDataRaw) {
  const [first] = data
  return first.default
}

export const IndexDataProvider = () => {
  const [resource] = createResource<IndexDataRaw>(async () => {
    return await getIndex('en') as any
  });
  return {
    get data() {
      return resource()
    },
    get loading() {
      return resource.loading;
    },
  }
}
