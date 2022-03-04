const headerStyle = {
  backgroundColor: "#7c7d7c",
  width: "100%",
  height: "50px",
};


const Header = () => (
  <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Realm Data</span>
      </a>    
      <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
