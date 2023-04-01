import React from "react";

const Form = () => {
  return (
    <div>
      <form className="h-72 bg-green-950 m-auto w-80 sm:w-60 sm:h-80 sm:truncate">
        <h3 className="font-bold text-white text-center py-5">
          Log in to continue
        </h3>
        <div className="flex flex-col gap-6 py-3 sm:flex-col sm:gap-2 sm:m-auto sm:py-0">
          <div className="flex flex-row m-auto gap-2 sm:flex-col sm:gap-2">
            <p className=" text-white text-m my-1 font-normal ml-5 sm:text-center">E-mail;</p>
            <input className=" bg-slate-600 text-white h-10 w-45 sm:h-8 sm:bg-white sm:text-black" />
          </div>
          <div className="flex flex-row m-auto gap-2 sm:flex-col sm:gap-2">
            <p className=" text-white text-m my-1 font-normal sm:text-center">Password;</p>
            <input className=" bg-slate-600 text-white h-10 w-45 sm:h-8 sm:bg-white sm:text-black" />
          </div>
        </div>
        <div className="flex justify-center py-4">
            <a href="" className="bg-slate-600 h-10 font-normal text-white text-center py-2 px-6 w-30 sm:bg-black sm:text-white">Log In</a>
        </div>
      </form>
    </div>
  );
};

export default Form;
