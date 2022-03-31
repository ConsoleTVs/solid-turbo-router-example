import { createTurboResource } from "turbo-solid";

const data = ({ params, onRouteRefetch }) => {
  const [post, { refetch }] = createTurboResource(() => `/posts/${params.id}`);

  onRouteRefetch(() => {
    refetch();
  });

  return { post };
};

export default data;
