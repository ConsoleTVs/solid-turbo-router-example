import { Link, useRouteData } from "solid-app-router";
import { Show } from "solid-js";
import { useRouteRefetch } from "../../lib/route-refetch";

const Page = () => {
  const { post } = useRouteData();
  const routeRefetch = useRouteRefetch();

  return (
    <div class="flex flex-col space-y-12">
      <Show when={post()} fallback={<div>Loading post...</div>}>
        {(post) => (
          <div class="flex flex-col space-y-3">
            <h1 class="text-3xl font-bold mb-3">{post.title}</h1>
            <p>{post.body}</p>
            <div>
              <button onClick={() => routeRefetch()}>Route Refetch</button>
            </div>
          </div>
        )}
      </Show>
    </div>
  );
};

export default Page;
