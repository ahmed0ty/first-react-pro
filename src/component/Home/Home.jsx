import Content from "../content/content";
import Navbar from "../Navbar/Navbar";

export default function Home() {


    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col items-center justify-center pt-10">
                <img src="./src/images/avataaars.svg" alt="" className="w-72" />
                <h1 className="text-center text-5xl font-bold text-white mt-4">START FRAMEWORK</h1>
                <div className="flex items-center justify-center p-3 mt-4">
                    <i className="fas fa-minus text-white"></i>
                    <i className="fa-solid fa-star text-white mx-2"></i>
                    <i className="fas fa-minus text-white"></i>
                </div>
                <p className="text-center text-white mt-4">Graphic Artist - Web Designer - Illustrator</p>
            </div>

            <Content />
        </>
    )




}
