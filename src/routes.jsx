import { Routes, Route } from "solid-app-router";
import { lazy } from "solid-js";
import { withRouteRefetch } from "./lib/route-refetch";

import PostsData from "./pages/posts/index.data";
import PostData from "./pages/posts/[id].data";

const Index = lazy(() => import("./pages/index"));
const Posts = lazy(() => import("./pages/posts/index"));
const Post = lazy(() => import("./pages/posts/[id]"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" component={Index} />
      <Route path="/posts">
        <Route path="/" component={Posts} data={withRouteRefetch(PostsData)} />
        <Route path="/:id" component={Post} data={withRouteRefetch(PostData)} />
      </Route>
    </Routes>
  );
};

export default Router;
