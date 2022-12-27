import { useRouter } from "next/router";
import { DependencyList, useEffect, useRef } from "react";

const useIsReady = (callback: () => void, deps?: DependencyList) => {
  const router = useRouter();
  const isMounted = useRef(false);

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (isMounted.current) {
        return;
      }

      isMounted.current = true;
      callback();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps?.length ? [...deps] : []
  );
};

export default useIsReady;
