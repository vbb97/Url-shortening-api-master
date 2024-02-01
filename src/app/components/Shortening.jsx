'use client';
import { useState, useEffect } from 'react';

export default function Shortening() {
  const [link, setLink] = useState('');
  const [sended, setSended] = useState(false);

  function submit(e) {
    e.preventDefault();
    setSended(true);

    if (link === '') return;
  }

  function sendError() {
    const isEmail = /^(?:https?:\/\/)?(w{3}\.)?[\w_-]+((\.\w{2,}){1,2})(\/([\w\._-]+\/?)*(\?[\w_-]+=[^\?\/&]*(\&[\w_-]+=[^\?\/&]*)*)?)?$/;

    if (sended) {
      const linkInput = document.getElementById('link');
      const errorMessage = document.getElementById('error-message');
      linkInput.value === '' || !isEmail.test(linkInput.value)
        ? linkInput.classList.replace(
            'sm:border-transparent',
            'sm:border-secondaryRed'
          )
        : linkInput.classList.replace(
            'sm:border-secondaryRed',
            'sm:border-transparent'
          );
      linkInput.value === '' || !isEmail.test(linkInput.value)
        ? errorMessage.classList.replace('sm:invisible', 'sm:visible')
        : errorMessage.classList.replace('sm:visible', 'sm:invisible');
    }
  }

  useEffect(() => {
    sendError();
  }, [sended, link]);

  return (
    <form
      onSubmit={(event) => submit(event)}
      action="/"
      className="sm:m-4 sm:py-6 sm:px-6 sm:flex sm:flex-col sm:bg-primaryDarkViolet sm:bg-pattern sm:bg-no-repeat sm:bg-right-top sm:rounded-md"
    >
      <input
        onChange={(e) => setLink(e.target.value)}
        id="link"
        className="sm:py-1 sm:px-4 sm:text-sm sm:text-neutralVeryDarkBlue sm:rounded-sm sm:border-4 sm:border-transparent"
        placeholder="Shorten a link here..."
        type="text"
      />

      <span
        id="error-message"
        className="sm:invisible sm:text-secondaryRed sm:text-xs"
      >
        Please add a link
      </span>
      <button
        type="submit"
        className="sm:mt-3 sm:py-2 sm:bg-primaryCyan sm:text-neutral-100 sm:text-sm sm:font-bold sm:rounded-sm"
      >
        Shorten It!
      </button>
    </form>
  );
}
