import { SwiperSlide, Swiper } from "swiper/react";
import { A11y, Autoplay, Keyboard, FreeMode } from 'swiper/modules';

export const Providers = () => {
 
    // Provider logos/names for carousel
const providers: Provider[] = [
  { name: 'Anthem Blue Cross Blue Shield', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/05/Anthem.png'},
  { name: 'Aetna', logo: 'https://www.aetna.com/content/dam/aetna/images/logos/Aetna_Logo_ss_Violet_RGB_Coated.svg' },
  { name: 'United Health care', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/05/UnitedHealthcare.png' },
  { name: 'Humana', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/05/humana.png' },
  { name: 'Cigna', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/05/cigna_healthcare.png' },
  { name: 'Kaiser Permanente', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/07/Kaiser-Permanente.png' },
  { name: 'Mutual of Omaha', logo: 'https://rhfinancialgroup.net/wp-content/uploads/2025/05/Mutual-of-Omaha.png' }
];


  return (
    <section aria-label="Insurance Providers" className="bg-white border-t-4 border-blue-600 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          We work with leading Insurance Providers
        </h3>
        <div className="provider-carousel" >
          <span className="sr-only">{providers.map((p) => p.name).join(', ')}</span>
          <Swiper aria-hidden freeMode allowTouchMove={false} autoplay={{ delay: 0, disableOnInteraction: false }} slidesPerView={5.5} spaceBetween={32} speed={10000} modules={[A11y, Autoplay, Keyboard, FreeMode]} loop={true} >
            { providers.map((provider) => (
            <SwiperSlide>
              <img style={{ height: '100px', margin: '0 auto' }} src={provider.logo} alt={provider.name} />
            </SwiperSlide>)
          )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}