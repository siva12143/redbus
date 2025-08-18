import bg from "../assets/HomeBanner.webp";
import swap from "../assets/swap.svg"
import women from '../assets/female.svg';
import {useState} from "react";
export default function Home() {

    const [from, setfrom] = useState("");
    const [to, setTo] = useState("");

    const handleFrom = (e) => {
        setfrom(e.target.value);
    }
    const handleTo = (e) => {
        setTo(e.target.value);
    }

    const handleLocation = () => {
        setfrom(to);
        setTo(from);
    }

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
                    <div className="ml-2 p-3 border-1 w-[25%] border-gray-700 rounded-[30px]">
                        <div className="p-2 flex flex-wrap">
                            <div><img src={women} alt="" /></div>
                            <div><h3>Booking for Women</h3><p>Know more</p></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}