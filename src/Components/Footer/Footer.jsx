import React from 'react';
import Iconka from '../../assets/icon.svg';
import { InstagramOutlined, WhatsAppOutlined, FacebookOutlined } from '@ant-design/icons';
import { FaTelegramPlane } from "react-icons/fa";
import foooters from '../../assets/footer.svg';

export const Footer = () => {
  return (
    <footer className='bg-footer py-8 px-4 md:px-8 lg:px-16'>
      <div className="main-container mx-auto">
        <div className='flex flex-col sm:flex-row items-center justify-between'>
          <div className="footer_icon mb-4 sm:mb-0">
            <img src={Iconka} alt="Icon" />
          </div>
          <div className="icon flex items-center gap-4">
            <p><InstagramOutlined className='text-2xl' /></p>
            <p><FaTelegramPlane className='text-2xl' /></p>
            <p><WhatsAppOutlined className='text-2xl' /></p>
            <p><FacebookOutlined className='text-2xl' /></p>
          </div>
        </div>
        <hr className='my-8 border-gray-400' />
        <ul className="footer_lists flex flex-wrap sm:flex-row gap-8 sm:gap-16 lg:gap-24 mb-8">
          <li className="footer_list flex-1">
            <h1 className="text-lg font-semibold mb-2">Услуги</h1>
            <p>Купить</p>
            <p>Арендовать</p>
            <p>Продать</p>
            <p>Оценить</p>
          </li>
          <li className="footer_list flex-1">
            <h1 className="text-lg font-semibold mb-2">Недвижимость</h1>
            <p>Квартиры</p>
            <p>Новостройки</p>
            <p>Дома и участки</p>
            <p>Коммерческая</p>
          </li>
          <li className="footer_list flex-1">
            <h1 className="text-lg font-semibold mb-2">Компания</h1>
            <p>О нас</p>
            <p>Блог</p>
            <p>Контакты</p>
            <p>Связаться</p>
          </li>
          <li className="footer_list flex-1">
            <h1 className="text-lg font-semibold mb-2">Другое</h1>
            <p>Ипотечный калькулятор</p>
            <p>Инвестиции в недвижимость в Дубае</p>
            <p>Дубае</p>
          </li>
        </ul>
        <hr className='border-gray-400 mb-4' />
        <div className='flex flex-col sm:flex-row items-center justify-between'>
          <small>2024 © RMC De Luxe real estate LLC. Все права защищены</small>
          <div className="images mt-4 sm:mt-0">
            <img src={foooters} alt="Footer decoration" />
          </div>
        </div>
      </div>
    </footer>
  );
};
