import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin6Line,
} from "react-icons/ri";

import Sidebar from "./components/shared/Sidebar";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}></Sidebar>
      {/* Menu movil*/}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-gray-400 text-3xl py-2 px-8 flex justify-between items-center rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pb-20 ">
        {/* Contenido dashboar */}
        <div className="lg:col-span-6 md:p-8 p-4">
          {/* Header */}
          <header className="l">
            {/* Title and Search */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center">
              <div>
                <h2 className="text-2xl text-gray-300">Jeager Restro</h2>
                <p className="text-gray-500">07 Octubre 2022</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    className="bg-[#1f1d2b] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
                    type="text"
                    placeholder="Buscar..."
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex gap-4 items-center justify-between border-b mb-6 md:justify-start md:gap-8">
              <a
                href=""
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="" className="py-2 pr-4">
                Col dishes
              </a>
              <a href="" className="py-2 pr-4">
                Soup
              </a>
              <a href="" className="py-2 pr-4">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16 bg-red">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img
                src="comida.png"
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        {/* Contenido orders */}
        <div
          className={`lg:col-span-2  fixed  top-0 bg-[#1f1d2b] w-full lg:w-80 lg:static lg:right-0   h-full transition-all ${
            showOrder ? "right-0" : "-right-full"
          }`}
        >
          {/* Orders */}
          <div className="relative pt-12 lg:pt-8 text-gray-300 p-8 h-full">
            <RiCloseLine
              onClick={toggleOrders}
              className="lg:hidden absolute right-4 top-4 p-2 box-content text-gray-300 bg-[#262837] rounded-full text-2xl"
            />
            <h2 className="text-2xl my-4">Order #151416</h2>
            {/*Pills */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className="border border-[#ec7c6a] text-[#ec7c6a] py-2 px-4 rounded-xl">
                To Go
              </button>
              <button className="border border-[#ec7c6a] text-[#ec7c6a] py-2 px-4 rounded-xl">
                Delivery
              </button>
            </div>
            {/*card*/}
            <div>
              {/* Sub Items */}
              <div className="grid grid-cols-6 mb-4 p-4 mt-4 font-bold">
                <h3 className="col-span-4">Item</h3>
                <h3>Qty</h3>
                <h3>Price</h3>
              </div>
              <div className="h-[400px] md:h-[700px] lg:h-[500px] overflow-scroll">
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                        alt="comida"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seasoned...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Product Qty*/}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Product Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note*/}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note"
                      />
                    </form>
                    <div className="">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                        alt="comida"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seasoned...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Product Qty*/}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Product Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note*/}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note"
                      />
                    </form>
                    <div className="">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                        alt="comida"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seasoned...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Product Qty*/}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Product Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note*/}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note"
                      />
                    </form>
                    <div className="">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product */}
                <div className="bg-[#262837] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6">
                    {/* Product Description*/}
                    <div className="col-span-4 flex items-center gap-3 mb-4">
                      <img
                        src="comida.png"
                        className="w-10 h-10 object-cover"
                        alt="comida"
                      />
                      <div>
                        <h5 className="text-sm">Spaicy seasoned...</h5>
                        <p className="text-xs text-gray-500">$2.29</p>
                      </div>
                    </div>
                    {/* Product Qty*/}
                    <div>
                      <span>2</span>
                    </div>
                    {/* Product Price*/}
                    <div>
                      <span>$4.58</span>
                    </div>
                  </div>
                  {/* Note*/}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1f1d2b] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note"
                      />
                    </form>
                    <div className="">
                      <button className="border border-red-500 p-2 rounded-lg">
                        <RiDeleteBin6Line className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sunmit payment */}
            <div className=" bg-[#262837] absolute w-full bottom-0 left-0 p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Discount</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400">Subtotal</span>
                <span>$201.03</span>
              </div>
              <button className="w-full text-white bg-[#ec7c6a] rounded-lg px-4 py-2">
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
