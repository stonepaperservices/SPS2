import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      let current = '';
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveId(current);
    };

    listener();
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
}
