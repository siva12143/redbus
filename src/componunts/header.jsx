import busLogo from "../assets/download.png"
import bus from "../assets/bus.svg"
import train from "../assets/train.svg"

export default function Header() {

    return (
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-0" id="mobile-menu-2">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="m-auto px-3">
                                <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white w-[80px]" aria-current="page" ><img className="w-full" src={busLogo} alt="" /></a>
                            </li>
                            <li className="m-auto px-3">
                                <a href="#" class="block py-2 pr-4 pl-3 text-red-500 border-b border-transparent hover:border-red-500  w-[110px] flex flex-wrap justify-center"><img className="w-5/6 " src={bus} alt="" /><span className="pt-3">Bus Tickets</span></a>
                            </li>
                            <li className="m-auto px-3">
                                <a href="#" class="block py-2 pr-4 pl-3 text-red-500 border-b border-transparent hover:border-red-500  w-[130px] flex flex-wrap justify-center"><img className="w-5/6 " src={train} alt="" /><span className="pt-3">Train Tickets</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center gap-5">
                        <a href="#" class="text-gray-800 ">Booking</a>
                        <a href="#" class="text-gray-800 ">Help</a>
                        <a href="#" class="text-gray-800 ">Account</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}