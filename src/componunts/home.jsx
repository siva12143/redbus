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