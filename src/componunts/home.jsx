import bg from "../assets/HomeBanner.webp";
export default function Home() {

    return (
        <div className="Home ">
            <section className="Banner min-h-[250px] h-[300px] flex items-center " style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
            }}>
                <div className="max-w-screen-xl mx-auto w-3/4">
                    <h1 className="text-5xl m-0 font-bold">India's No. 1 online <br /> bus ticket booking site</h1>
                </div>
            </section>
            <section className="searchContainer mt-10">
                <div className="serachBar flex max-w-screen-lg m-auto">
                    <div className=" border-1 w-1/4 border-gray-700 border-r-0">
                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-3 border-1 w-1/4 border-gray-700 border-r-0">


                    </div>
                    <div className="p-3 border-1 w-1/4 border-gray-700"></div>
                    <div className="ml-1 p-3 border-1 w-1/4 border-gray-700"></div>
                </div>
            </section>
        </div>
    )
}