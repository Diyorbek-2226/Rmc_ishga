import rasm1 from '../../assets/katta.svg';
import rasm2 from '../../assets/kichik.svg';
import Chec from '../../assets/Checkmark.svg';
import './Section.css';
import { useTranslation } from 'react-i18next';

export const Section = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='my-8 bg-create py-28'>
        <div className="main-container">
          <div className="section_title block mx-auto lg:flex justify-between items-center">
            <div className="section_left">
              <h2 className='text-[30px] font-[500]'>{t('investment.dubai')}</h2>
              <p className='my-4'>{t('investment.opportunities')}</p>
              <p className='my-4'>{t('investment.full_cycle')}</p>
              <p className='my-4'>{t('investment.expert_help')}</p>
              <button className='btn_Content bg-custom my-6'>
                {t('call_to_action.learn_more')}
              </button>
            </div>
            <div className="section_right max-w-full md:max-w-full flex items-center">
              <img className='hidden lg:block xl:absolute top-56 right-80 min-small:block' src={rasm2} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="main-container">
          <h1 className='text-[30px] font-[500] '>{t('property_management.services_included')}</h1>
          <div className="my-8">
            <table className="w-full border-collapse mx-auto">
              <tbody>
                <tr className="flex flex-col sm:flex-row">
                  <td className="flex items-center gap-2 w-full sm:w-1/2 p-2">
                    <img src={Chec} alt="" />
                    <p>{t('property_management.tenant_screening')}</p>
                  </td>
                  <td className="flex items-center gap-2 w-full sm:w-1/2 p-2">
                    <img src={Chec} alt="" />
                    <p>{t('property_management.maintenance')}</p>
                  </td>
                </tr>
                {/* Add other rows here following the same pattern */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
