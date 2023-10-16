

import "./style.scss";

const page = () => {
    return (
        <section id="curs">
            <div className="container mx-auto px-5">
                <ul className="flex items-center justify-between h-[262px]">
                    <li className="curs-card  w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </li>
                    <li className="curs-card   w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </li>
                    <li className="curs-card  w-[250px] h-[100px] flex justify-end items-end">
                        <p className="text-[25px] font-bold text-white">Kursning <span className="text-[#00E689] block">davomiyligi 1 oy</span></p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default page;