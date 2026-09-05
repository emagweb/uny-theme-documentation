import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-EXM1P4SQ7E';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Инициализация Google Analytics при первой загрузке
    if (!window.gtag) {
      // Создаем dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      // Инициализируем gtag
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);

      // Загружаем скрипт Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Отслеживаем переходы между страницами
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);
};
