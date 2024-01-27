export default function Header() {
  return (
    <nav id="navbar" className="hide-menu sm:w-11/12 sm:py-8 px-8 sm:flex sm:flex-col sm:items-center sm:gap-8 sm:absolute sm:top-24 sm:left-1/2 sm:-translate-x-1/2 sm:-rotate-x-90 sm:bg-primaryDarkViolet sm:rounded-md sm:transition-transform">
      <ul className="sm:w-full sm:pb-8 sm:flex sm:flex-col sm:items-center sm:gap-4 sm:border-b-2 sm:border-neutral-400">
        <li><a className="sm:text-neutral-200 sm:font-bold sm:hover:text-neutralGrayishViolet" href="/">Features</a></li>
        <li><a className="sm:text-neutral-200 sm:font-bold sm:hover:text-neutralGrayishViolet" href="/">Pricing</a></li>
        <li><a className="sm:text-neutral-200 sm:font-bold sm:hover:text-neutralGrayishViolet" href="/">Resources</a></li>
      </ul>

      <div className="sm:w-full sm:flex sm:flex-col sm:items-center sm:gap-4">
        <button className="sm:text-neutral-200 sm:font-bold">Login</button>
        <button className="sm:w-full sm:py-4 sm:bg-primaryCyan sm:text-neutral-200 sm:font-bold sm:rounded-full sm:hover:opacity-80">Sign Up</button>
      </div>
    </nav>
  );
}
