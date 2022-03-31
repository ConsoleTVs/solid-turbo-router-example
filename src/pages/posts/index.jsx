import { useRouteData, Link } from "solid-app-router";
import { Show, For } from "solid-js";

const Page = () => {
  const { posts } = useRouteData();

  return (
    <>
      <Show when={posts()} fallback={<div>Loading posts...</div>}>
        {(posts) => (
          <div class="flex flex-col space-y-3">
            <h1 class="text-3xl font-bold">All the posts</h1>
            <For each={posts} fallback={<div>There are no posts</div>}>
              {(post) => (
                <Link href={`/posts/${post.id}`}>
                  {post.id} &mdash; {post.title}
                </Link>
              )}
            </For>
          </div>
        )}
      </Show>
    </>
  );
};

export default Page;
