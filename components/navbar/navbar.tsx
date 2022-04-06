import Image from 'next/image';
import { SearchField } from '../forms/search-field/search-field';

const NavBar = () => {
  return (
    <nav className="flex flex-wrap relative w-full items-center justify-between py-2 bg-white-default border-0 m-0 p-0 shadow-sm shadow-gray-default">
      <div className="w-full mx-auto max-w-screen-xl flex justify-between">
        <div className="flex items-center space-x-10">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/6007676ae344bd2f87863dc4/1618364278872-4NQYN12G95AXR29R9AZD/Updated+logo+to+size+%28White+Letters%29+Part+2.png?format=1500w"
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
        <div className="flex items-center space-x-8">
          <Image
            src="/player_placeholder_64.png"
            alt="holder1"
            width="64"
            height="64"
          />
          <Image
            src="/player_placeholder_64.png"
            alt="holder1"
            width="64"
            height="64"
          />
          <Image
            src="/player_placeholder_64.png"
            alt="holder1"
            width="64"
            height="64"
          />
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
