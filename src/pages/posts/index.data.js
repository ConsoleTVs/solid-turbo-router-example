import { createTurboResource } from "turbo-solid";

const data = ({ onRouteRefetch }) => {
  const [posts, { refetch }] = createTurboResource(() => "/posts");

  onRouteRefetch(() => {
    refetch();
  });

  return { posts };
};

export default data;
