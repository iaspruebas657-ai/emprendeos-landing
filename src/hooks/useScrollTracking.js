import { useEffect } from 'react';
import { trackEvent } from '../utils/analytics';

export const useScrollTracking = () => {
  useEffect(() => {
    let fired25 = false;
    let fired50 = false;
    let fired75 = false;
    let fired100 = false;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollPosition / (docHeight - winHeight)) * 100;

      if (scrollPercent >= 25 && !fired25) {
        trackEvent('scroll_25');
        fired25 = true;
      }
      if (scrollPercent >= 50 && !fired50) {
        trackEvent('scroll_50');
        fired50 = true;
      }
      if (scrollPercent >= 75 && !fired75) {
        trackEvent('scroll_75');
        fired75 = true;
      }
      if (scrollPercent >= 99 && !fired100) { // Using 99 to ensure it fires
        trackEvent('scroll_100');
        fired100 = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
