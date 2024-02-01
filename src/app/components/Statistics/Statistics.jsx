import { ST } from 'next/dist/shared/lib/utils';
import StatistcsItem from './StatisticsItem';

export default function Statistics() {
  return (
    <section className="sm:mt-16 sm:flex sm:flex-col sm:gap-12">
      <div className="sm:flex sm:flex-col sm:items-center sm:text-center sm:gap-4">
        <h2 className="sm:text-neutralVeryDarkBlue sm:text-2xl sm:font-bold">
          Advanced Statistcs
        </h2>
        <p className="sm:text-neutral-100 sm:text-sm sm:leading-6">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="sm:flex sm:flex-col sm:gap-12 sm:relative">
        <div className="sm:w-2 sm:absolute sm:top-0 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:bg-primaryCyan"></div>
        <StatistcsItem
          pathImage="./images/icon-brand-recognition.svg"
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don’t 
mean a thing. Branded links help instil confidence in your content."
        />

        <StatistcsItem
          pathImage="./images/icon-detailed-records.svg"
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions."
        />

        <StatistcsItem
          pathImage="./images/icon-fully-customizable.svg"
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement."
        />
      </div>
    </section>
  );
}

/* 

  

  

*/
