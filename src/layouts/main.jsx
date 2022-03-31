import { useLocation, Link } from "solid-app-router";
import { createSelector } from "solid-js";

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      <header class="container flex mx-auto my-12 justify-between">
        <div class="flex space-x-3 items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-black">
            <span class="text-4xl font-bold text-white">λ</span>
          </div>
          <span class="text-xl">Application Name</span>
        </div>
        <div class="flex space-x-3">
          <Link href="/">Index</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </header>
      <main class="container mx-auto my-12">{props.children}</main>
      <footer class="container mx-auto text-xs">
        Copyright &copy; {new Date().getFullYear()} &mdash; Èrik C. Forés. All
        Rights Reserved
      </footer>
    </>
  );
};

export default Layout;
