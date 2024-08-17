import React from 'react'
import { Carousel } from 'antd';
import Images1 from '../../assets/image.png'
import { useTranslation } from 'react-i18next';

export const Main = () => {
    const {t, i18n} = useTranslation()
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
   <main  className='my-20 '>
    <div id='abaout' className="main-container">
        <div className="main_titles block md:flex justify-between lg:justify-between ">
            <div className="main_left ">
                <h3 className='text-3xl'>{t("company.names")} <br /> <span className='text-custom'>{t("company.name")}</span>
                </h3>
            </div>
            <div className="main_right">
                <ul className="main_lists flex justify-between gap-2  max-small:flex max-small:items-center max-small:justify-between">
                    <li className="main_list hover:text-custom duration-500 text-xl cursor-pointer">
                    {t("services.rental")} 
                    </li>
                    <li className="main_list hover:text-custom duration-500 text-xl  cursor-pointer">
                    {t("services.buy_sell")} 
                    </li>
                    <li className="main_list hover:text-custom duration-500 text-xl cursor-pointer">
                    {t("services.management")} 
                    </li>
                </ul>
                <hr  className='max-w-full h-[2px] bg-custom my-2'/>
                <p className='my-8'>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды – <br /> от квартир и домов до коммерческих помещений, удовлетворяющие любые <br /> потребности</p>
                <p>Надежные арендаторы: Проведение тщательной проверки и отбора <br /> арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
            </div>
        </div>
<div className='my-10 '>
    <Carousel className='text-custom max-w-full md:max-w-full ' arrows dotPosition="left" infinite={false}>
      <div>
       <img className='h-[auto] max-h-full ' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto] max-h-full' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto] max-h-full' src={Images1} alt="" />
      </div>
      <div>
      <img className='h-[auto] max-h-full' src={Images1} alt="" />
      </div>
    </Carousel>

</div>
    </div>
   </main>
  )
}
