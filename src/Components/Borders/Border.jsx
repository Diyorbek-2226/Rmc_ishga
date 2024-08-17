import './border.css'

export const Border = () => {
  return (
    <div className="border ">
        <div className="main-container">
        <ul className="boxs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 my-20">
            <li className="box">
                <p className="text-xl my-2">
                Опыт и профессионализм
                </p>
                <p>Наши специалисты имеют многолетний опыт в различных
                     сферах недвижимости, что гарантирует высокое качество услуг</p>
            </li>
            <li id='box2' className="box"></li>
            <li className="box"> <p className="text-xl my-2">
            Прозрачность и доверие
                </p>
                <p>Обеспечение полной прозрачности всех операций и
                     предоставление отчетов. Работа основана на принципах
                      честности и доверия, что подтверждается отзывами</p></li>
            <li id='box3' className="box"></li>
            <li className="box">
            <h3 className='text-xl my-3'>Высокий уровень <br /> обслуживания</h3>
            <p>Мы всегда на связи, чтобы помочь вам в любое время</p>
            </li>
            <li id='box3' className="box"></li>
            <li className="box">
            <p className="text-xl my-2">
            Индивидуальный подход
                </p>
                <p>Мы разрабатываем персонализированные решения
                  , учитывая уникальные потребности каждого клиента</p>
            </li>
            <li id='box6' className="box"></li>
            <li className="box">
            <p className="text-xl my-2">
            Комплексное обслуживание
                </p>
                <p>Полный спектр услуг, 
                   включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.</p>
            </li>
        </ul>
        </div>
    </div>
  )
}
