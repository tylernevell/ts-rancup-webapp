import Image from 'next/image';
import { SearchField } from '../forms/search-field/search-field';

const NavBar = () => {
  return (
    <nav className="flex flex-wrap relative w-full items-center justify-between py-2 bg-white-default border-0 m-0 p-0 shadow-sm shadow-gray-default">
      <div className="mx-auto max-w-screen-xl flex flex-wrap items-center jusitify-between px-6">
        <div className="flex items-center">
          <Image
            src="/rancup.png"
            alt="logo placeholder"
            width="154"
            height="52"
          />
          <SearchField
            placeholder="Search"
            id="navbarSearch"
            name="navbarSearch"
            className="w-80"
          />
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
