import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (data: Record<string, string>) => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim() || data.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    const phoneRegex = /^\+?[0-9]{10,15}$/;
    const cleanPhone = data.phone.replace(/[\s()-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: '',
      project: 'Обратный звонок',
      comment: 'Клиент запросил обратный звонок',
    };

    const validationErrors = validateForm(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast({
        title: 'Проверьте заполнение формы',
        description: 'Некоторые поля содержат ошибки',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/3a37d2bc-1923-4ec9-894f-88eb4aa4b1f6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 3000);
        toast({
          title: '✅ Заявка отправлена!',
          description: 'Мы перезвоним вам в ближайшее время',
        });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: 'Ошибка отправки',
        description: 'Попробуйте позже или позвоните нам',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm max-w-[90vw] p-5 relative overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {showSuccess && (
          <div className="absolute inset-0 bg-green-500/95 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in zoom-in duration-300">
            <div className="text-center text-white px-4">
              <Icon name="CheckCircle2" size={48} className="mx-auto mb-3 animate-bounce" />
              <h4 className="text-xl font-bold mb-1">Отлично!</h4>
              <p className="text-sm">Мы перезвоним вам в ближайшее время</p>
            </div>
          </div>
        )}
        <DialogHeader>
          <DialogTitle className="text-lg">Заказать обратный звонок</DialogTitle>
          <DialogDescription className="text-xs">
            Оставьте контакты, мы свяжемся с вами
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3 mt-2">
          <div>
            <label className="block text-xs font-medium mb-1">Ваше имя</label>
            <Input 
              name="name" 
              placeholder="Иван Иванов" 
              required 
              className={errors.name ? 'border-red-500 h-9' : 'h-9'} 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Телефон</label>
            <Input 
              name="phone" 
              type="tel" 
              placeholder="+7 905 710 8890" 
              required 
              className={errors.phone ? 'border-red-500 h-9' : 'h-9'} 
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <Button type="submit" className="w-full h-9" disabled={isSubmitting}>
            {isSubmitting ? 'Отправка...' : 'Заказать звонок'}
          </Button>
          <p className="text-[10px] text-muted-foreground text-center leading-tight">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackModal;