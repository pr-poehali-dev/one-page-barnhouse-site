import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Home" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">BarnHouse</h1>
            </Link>
            <Link to="/">
              <Button variant="outline">На главную</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Политика обработки персональных данных</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              Настоящая Политика обработки персональных данных (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей сайта BarnHouse.
            </p>
            <p className="text-muted-foreground">
              Используя сайт, вы соглашаетесь с условиями настоящей Политики. Если вы не согласны с условиями, пожалуйста, не используйте сайт.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Собираемые данные</h2>
            <p className="text-muted-foreground mb-3">
              Мы можем собирать следующие категории персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Имя и фамилия</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Данные о посещении сайта (IP-адрес, браузер, время посещения)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
            <p className="text-muted-foreground mb-3">
              Мы используем ваши персональные данные для:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Обработки заявок и обратной связи</li>
              <li>Предоставления консультаций по строительству</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования о наших услугах и предложениях</li>
              <li>Анализа посещаемости сайта</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Правовые основания обработки</h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется на основании вашего согласия, полученного при заполнении форм обратной связи на сайте, а также в соответствии с Федеральным законом № 152-ФЗ "О персональных данных".
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Защита данных</h2>
            <p className="text-muted-foreground mb-3">
              Мы применяем технические и организационные меры для защиты ваших персональных данных:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Шифрование данных при передаче (SSL/TLS)</li>
              <li>Ограничение доступа к персональным данным</li>
              <li>Регулярное обновление систем безопасности</li>
              <li>Контроль действий персонала с данными</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Файлы Cookie</h2>
            <p className="text-muted-foreground mb-3">
              Мы используем файлы cookie для:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Улучшения работы сайта</li>
              <li>Анализа посещаемости</li>
              <li>Сохранения ваших предпочтений</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              Вы можете отключить использование cookie в настройках вашего браузера, однако это может ограничить функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground">
              Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством РФ, или с вашего согласия.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Ваши права</h2>
            <p className="text-muted-foreground mb-3">
              Вы имеете право:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Получать информацию об обработке ваших данных</li>
              <li>Требовать исправления неточных данных</li>
              <li>Требовать удаления ваших данных</li>
              <li>Отозвать согласие на обработку данных</li>
              <li>Обжаловать действия в Роскомнадзор</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Срок хранения данных</h2>
            <p className="text-muted-foreground">
              Мы храним ваши персональные данные в течение срока, необходимого для достижения целей обработки, или до отзыва вашего согласия.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Изменения в Политике</h2>
            <p className="text-muted-foreground">
              Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на этой странице.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Контакты</h2>
            <p className="text-muted-foreground mb-3">
              По вопросам обработки персональных данных обращайтесь:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p>Email: info@barnhouse.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
            </div>
          </section>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
