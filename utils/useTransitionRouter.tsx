import { useEffect, useRef } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import { transitionHelper } from "./transitionHelper";

function useViewTransitionRouter(): ReturnType<typeof useNextRouter> {
  const router = useNextRouter();
  const pathname = usePathname();
  
  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => void
  > | null>(null);

  useEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        promiseCallbacks.current.resolve(undefined);
        promiseCallbacks.current = null;
      }
    };
  }, [pathname]);

  return {
    ...router,
    back: () => {
      transitionHelper({
        updateDOM: () => router.back(),
      });
    },
    forward: () => {
      transitionHelper({
        updateDOM: () => router.forward(),
      });
    },
    push: (...args: Parameters<typeof router.push>) => {
      transitionHelper({
        updateDOM: () => {
          const url = args[0] as string;
          if (url === pathname) {
            router.push(...args);
          } else {
            return new Promise((resolve, reject) => {
              // @ts-ignore
              promiseCallbacks.current = { resolve, reject };
              router.push(...args);
            });
          }
        },
      });
    },
    replace: (...args: Parameters<typeof router.replace>) => {
      transitionHelper({
        updateDOM: () => router.replace(...args),
      });
    },
  };
}

export default useViewTransitionRouter;