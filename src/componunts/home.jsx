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
                <div className="serachBar flex w-[1200px] m-auto">
                    <div className="w-[75%] flex flex-wrap relative">
                        <div onClick={handleLocation} className="swaping w-12 rounded-3xl pt-[6px] absolute left-[27%] top-[20px] rotate-90 bg-gray-700 h-12" >
                            <img className="w-3/4 m-auto" src={swap} alt="" />
                        </div>
                        <div className="p-2 border-1 w-[30%] border-gray-700 border-r-0 " style={{
                            borderRadius: "30px 0 0 30px"
                        }}>
                            <p className="px-3">From</p>
                            <select name="from" value={from} id="from" className="px-2" onChange={handleFrom}>
                                <option value="">Select</option>
                                <option value="Tirunelveli">Tirunelveli</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Erode">Erode</option>
                                <option value="Sivakasi">Sivakasi</option>
                            </select>
                        </div>
                        <div className="p-3 border-1 w-[30%] border-gray-700 border-r-0">
                            <p className="px-3">To</p>
                            <select name="from" id="from" value={to} className="px-2" onChange={handleTo}>
                                <option value="">Select</option>
                                <option value="Tirunelveli">Tirunelveli</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Erode">Erode</option>
                                <option value="Sivakasi">Sivakasi</option>
                            </select>
                        </div>
                        <div className="p-3 border-1 w-[40%] border-gray-700 flex flex-wrap" style={{
                            borderRadius: "0 30px 30px 0"
                        }}>
                            <div>
                                <p>Date of Journey</p>
                                <input type="date" />
                            </div>
                            <div className="flex flex-wrap gap-2 items-center ml-2">
                                <span className="p-2 px-3 bg-red-100 rounded-xl">Today</span>
                                <span className="p-2 px-3 bg-red-100 rounded-xl">Tommorrow</span>
                            </div>
                        </div>
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