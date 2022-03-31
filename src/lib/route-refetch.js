import { createSignal, onCleanup } from "solid-js";

const createRouteRefetcher = () => {
  const listeners = new Set();

  function add(listener) {
    return listeners.add(listener);
  }

  function remove(listener) {
    return listeners.delete(listener);
  }

  function refetch() {
    for (const listener of listeners) {
      listener();
    }
  }

  return { add, remove, refetch };
};

const refetcher = createRouteRefetcher();

export const useRouteRefetch = () => {
  return refetcher.refetch;
};

export const withRouteRefetch = (data) => {
  return (route) => {
    const onRouteRefetch = (listener) => {
      refetcher.add(listener);
      onCleanup(() => refetcher.remove(listener));
    };

    return data({ onRouteRefetch, ...route });
  };
};
