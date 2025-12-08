import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Icon name="Cookie" className="text-primary mt-1 flex-shrink-0" size={24} />
            <div className="text-sm text-foreground">
              <p className="mb-1">
                Мы используем файлы cookie для улучшения работы сайта и персонализации сервисов.
              </p>
              <p className="text-muted-foreground">
                Продолжая использовать сайт, вы соглашаетесь с{' '}
                <a href="/privacy" className="text-primary hover:underline">
                  политикой обработки персональных данных
                </a>
                {' '}и использованием cookies.
              </p>
            </div>
          </div>
          <Button onClick={acceptCookies} className="whitespace-nowrap">
            Принять
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
