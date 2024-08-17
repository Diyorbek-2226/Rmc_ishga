import React from 'react';
import image1 from '../../assets/card.svg';
import image2 from '../../assets/card2.svg';
import image3 from '../../assets/card3.svg';
import './block.css';

export const Block = () => {
  return (
    <section id='block' className='  min-smal:px-4 py-8'>
      <div className="main-container">
        <h1 className='text-3xl font-medium mb-4 text-center'>Блог</h1>
        <ul className="cards flex flex-wrap gap-4">
          <li className="card flex-1 min-w-[300px] border border-gray-300 rounded overflow-hidden transition-transform transform hover:scale-105">
            <img src={image1} alt="Тенденции и прогнозы рынка недвижимости на 2024 год" />
            <div className="p-4">
              <h1 className="text-xl mb-2">Тенденции и прогнозы рынка <br /> недвижимости на 2024 год</h1>
              <small className='text-custom'>Подробнее</small>
            </div>
          </li>
          <li className="card flex-1 min-w-[300px] border border-gray-300 rounded overflow-hidden transition-transform transform hover:scale-105">
            <img src={image2} alt="Лучшие районы для инвестиций в недвижимость" />
            <div className="p-4">
              <h1 className="text-xl mb-2">Лучшие районы для инвестиций <br /> в недвижимость</h1>
              <small className='text-custom'>Подробнее</small>
            </div>
          </li>
          <li className="card flex-1 min-w-[300px] border border-gray-300 rounded overflow-hidden transition-transform transform hover:scale-105">
            <img src={image3} alt="Топ-10 новых жилых комплексов" />
            <div className="p-4">
              <h1 className="text-xl mb-2">Топ-10 новых <br /> жилых комплексов</h1>
              <small className='text-custom'>Подробнее</small>
            </div>
          </li>
        </ul>
        <div className="text-center mt-6">
          <button className='btn_Content bg-custom text-white px-4 py-2 rounded'>
            Все статьи
          </button>
        </div>
      </div>
    </section>
  );
}
