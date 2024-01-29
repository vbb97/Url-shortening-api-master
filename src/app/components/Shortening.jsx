export default function Shortening() {
    return (
        <section className="sm:m-4 sm:py-6 sm:px-6 sm:flex sm:flex-col sm:gap-6 sm:bg-primaryDarkViolet sm:bg-pattern sm:bg-no-repeat sm:bg-right-top sm:rounded-md">
            <input className="sm:py-2 sm:px-4 sm:text-sm sm:text-neutralVeryDarkBlue sm:rounded-sm" placeholder="Shorten a link here..." type="text" />
            <button className="sm:py-2 sm:bg-primaryCyan sm:text-neutral-100 sm:text-sm sm:font-bold sm:rounded-sm">Shorten It!</button>
        </section>
    )
}