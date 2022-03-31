/* @refresh reload */
import { render } from "solid-js/web";
import { Suspense } from "solid-js";
import { Router } from "solid-app-router";
import { TurboContext } from "turbo-solid";

import "tailwindcss/tailwind.css";

import AppRoutes from "./routes";
import Main from "./layouts/main";

const App = () => {
  /**
   * Turbo solid configuration.
   */
  const configuration = {
    /**
     * Use startTransition for resource refetchings.
     */
    transition: true,

    /**
     * Cache expiration time after the item
     * has been resolved. We cache it for 0 seconds
     * regardless of the item.
     */
    expiration() {
      return 0;
    },

    /**
     * The generic fetcher that will be used for all resources.
     */
    async fetcher(key, { signal }) {
      const base = "https://jsonplaceholder.typicode.com";
      const response = await fetch(base + key, { signal });
      if (!response.ok) throw new Error("Not a 4XX response");
      return await response.json();
    },
  };

  return (
    <TurboContext.Provider value={configuration}>
      <Router>
        <Suspense>
          <Main>
            <AppRoutes />
          </Main>
        </Suspense>
      </Router>
    </TurboContext.Provider>
  );
};

render(() => <App />, document.getElementById("root"));
