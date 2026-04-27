import type { PointerEvent as ReactPointerEvent } from 'react';

/**
 * Cursor-aware sheen handler.
 * Attach as `onPointerMove` on any `.sheen` element — JS sets
 * `--mx` and `--my` so the radial highlight tracks the pointer.
 *
 * Cheap (one event, two CSS-var writes), GPU-only repaint, skips on touch.
 */
export function onPointerSheen(e: ReactPointerEvent<HTMLElement>) {
  if (e.pointerType !== 'mouse') return;
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  target.style.setProperty('--mx', `${x}%`);
  target.style.setProperty('--my', `${y}%`);
}
