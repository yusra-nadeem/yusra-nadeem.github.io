import { useEffect, useRef, useState } from 'react';

/**
 * One-shot in-view reveal hook.
 * Returns a ref + boolean — element fades/translates in when first visible
 * and stays revealed (we don't toggle off, to avoid jank on re-entry).
 */
export function useReveal<T extends Element>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shown, threshold]);

  return { ref, shown };
}
