import { PiSquaresFour } from "react-icons/pi";
import { BsCart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="py-4 border-b">
        <nav className="max-w-[1100px] mx-auto">
          <div className="flex items-center justify-between">
            <div className="logo flex gap-2 items-center    ">
              <img
                src="https://dukaan.b-cdn.net/200x200/webp/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645102209653-487a05e3-f610-4620-8b93-4b915e2f54ea.jpeg"
                alt="Pizza Heist"
                className="w-16 h-full rounded-md"
              />
              <p className="font-medium">Pizza Heist</p>
            </div>

            <div className="input">
              <input
                type="text"
                placeholder="Search for products..."
                className="focus:border-none focus:outline-none bg-gray-100 py-2 px-4 rounded-lg text-gray-500 w-[150%]"
              />
            </div>

            <ul className="nav-list flex gap-8">
              <li className="flex items-center gap-2">
                <PiSquaresFour className="text-2xl" />
                Categories
              </li>
              <li className="flex items-center gap-2">
                <BsCart className="text-xl" />
                Cart
              </li>
              <li className="flex items-center gap-2">
                <CiUser className="text-xl" />
                Account
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-b py-4">
        <div className="max-w-[1100px] mx-auto flex gap-4 items-center">
          <img
            src="https://dukaan.b-cdn.net/600x600/webp/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1651992920320-6084da33-883f-4fba-886c-91e358a46625.jpeg"
            alt="image"
            className="w-full rounded-xl"
          />
          <img
            src="https://dukaan.b-cdn.net/600x600/webp/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645359885952-f9c6672e-2234-4c01-a873-bf0f1c0ff7ff.jpeg"
            alt="coffee"
            className="w-full rounded-xl"
          />
          <img
            src="https://dukaan.b-cdn.net/600x600/webp/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1646234575562-39e32617-a344-4c70-a39a-713c04197277.jpeg"
            alt="image"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
