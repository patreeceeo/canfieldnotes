import { createResource } from 'solid-js';
// TODO figure out how to use this
// import { createRouteData } from 'solid-js';
import { getDocFile, DocFile } from 'data/src/index';


export type Meta = {
  data: DocFile
  loading: boolean
}

type RouteProps = {
  params: {
    resource: string
  }
}

export const DataProvider = (props: RouteProps) => {
  const [resource] = createResource<DocFile>(async () => {
    return await getDocFile('en', props.params.resource)
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
