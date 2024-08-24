import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggle()}
          className="h-10 w-10 cursor-pointer"
          alt="hamburger"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMg7VcAc6WkebF912z4ABmiZPlt1Y_TpXbg&s"
        ></img>
        <img
          className="h-12 w-32 mx-2"
          alt="youtube-logo"
          src="https://as1.ftcdn.net/v2/jpg/03/00/38/90/1000_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
        ></img>
      </div>
      <div className="col-span-10 px-40 py-1">
        <input
          type="text"
          className="w-2/3 border border-gray-600 py-1 rounded-l-full "
          placeholder="Search Here.."
        ></input>
        <button className="rounded-r-full p-1 border border-gray-600 px-3 bg-gray-100">
          🔍
        </button>
      </div>
      <div>
        <img
          className="h-12 w-16 col-span-1"
          alt="user"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Head;
