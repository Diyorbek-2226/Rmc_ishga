import './contact.css'
import Rasm from '../../assets/Photo.svg'

export const Contact = () => {
  return (
   <main id='contact'>
    <div className="max-w-full  sm:main-container  ">
        <h3 className='text-3xl font-[500]'>
        Рассчитайте ипотеку
        </h3>
        <div className="contact_content bg-belaya ">
<ul className="contacts block lg:flex  justify-between ">
    <li className="contact1">
       <div className='my-4'>
       <p>Стоимость недвижимости (у.е.)</p>
       <input placeholder='Введите стоимость' type="text" />
       </div>
       <div className='my-4'>
       <p>Срок в годах</p>
       <input placeholder='Введите срок' type="text" />
       </div>
       <div className="my-4">
       <button className='btn_Content bg-custom'>Рассчитать</button>
       </div>
    </li>
    <li className="contact2">
    <div className='my-4  px-8 max-w-full sm:max-w-full '>
       <p>Первоначальный взнос (у.е.)</p>
       <input placeholder='Введите размер взноса' type="text" />
       </div>
       <div className='my-4'>
       <p>Ставка (%)</p>
       <input placeholder='Введите размер ставки' type="text" />
       </div>
    </li>
    <li className="contact3 flex items-center gap-12">
       <div>
       <div  className='my-4'>
            <small>
            Ежемесячный платеж
            </small>
            <h2 className="text-xl font-[500]">
            4 410 у.е.
            </h2>
        </div><div  className='my-4'>
            <small>
            Процентная ставка
            </small>
            <h2 className="text-xl font-[500]">
            24%
            </h2>
        </div>
       </div >
       <div >
       <div  className='my-4'>
            <small>
            Сумма кредита
            </small>
            <h2 className="text-xl font-[500]">
            200 000 у.е.
            </h2>
        </div><div  className='my-4'>
            <small>
            Дата последнего платежа
            </small>
            <h2 className="text-xl font-[500]">
            28 июля 2034 г
            </h2>
        </div>
       </div>
    </li>
</ul>
        </div>
<div className="contact_titles flex items-center justify-between my-12">
    
    <div className="contact_left">
    <h1 className='text-3xl my-12'>Остались вопросы? <br />Свяжитесь с нами</h1>
       <div className='my-8'>
       <input placeholder='ФИО *' type="text" />
       <hr />
       </div>
       <div className='my-8'>
       <input placeholder='Номер телефона *' type="number" />
       <hr />
       </div>
       <div className='my-8'>
       <input className='hover:border-none' placeholder='E-mail' type="email" />
       <hr />
       <div className='my-8'>
        <button className='btn_Content bg-custom'>Отправить</button>
    </div>
    </div>
    </div>
    <div className="contact_right ">
        <img className='hidden  min-small::max-w-[420px] max-h-[520px] ' src={Rasm} alt="" />
    </div>
</div>
    </div>
   </main>
  )
}
