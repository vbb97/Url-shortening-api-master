import Image from 'next/image';
import Button from './Button';
export default function Main() {
  return (
    <section className="sm:px-4 sm:flex sm:flex-col-reverse sm:gap-8">
      <div className="sm:flex sm:flex-col sm:items-center sm:gap-3 sm:text-center">
        <h1 className="sm:text-neutralVeryDarkBlue sm:text-3xl sm:font-extrabold">
          More than just shorter links
        </h1>
        <p className="sm:text-neutralGray sm:text-sm">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button />
      </div>

      <div className="sm:w-full sm:h-48">
        <Image width={733} height={482} className="sm:w-80 sm:absolute sm:left-8 sm:z-0" src="/images/illustration-working.svg"/>
      </div>

    </section>
  );
}
