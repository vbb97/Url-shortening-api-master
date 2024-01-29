import Image from 'next/image';

export default function StatistcsItem(props) {
    return (
        <div className="sm:ml-4 sm:mr-4 sm:pt-16 sm:py-8 sm:px-4 sm:flex sm:flex-col sm:items-center sm:gap-3 sm:relative sm:text-center sm:bg-neutral-100">
          <div className="sm:w-16 sm:h-16 sm:flex sm:items-center sm:justify-center sm:absolute sm:-top-8 sm:left-1/2 sm:-translate-x-1/2 sm:bg-primaryDarkViolet sm:rounded-full">
            <Image
              width={40}
              height={40}
              src={props.pathImage}
            />
          </div>
          <h4 className="sm:text-neutralVeryDarkBlue sm:text-lg sm:font-bold">
            {props.title}
          </h4>
          <p className="sm:text-neutralGray sm:text-sm">{props.text}</p>
        </div>
    )
}