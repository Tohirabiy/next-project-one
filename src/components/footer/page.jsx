import "./style.scss"
const page = () => {
    return (
        <>
        <footer className="pt-[80px]">
        <div className="container mx-auto">
        <div className="flex items-center flex-col justify-center"><h2>O’quvchilarimizning <span>kurs haqidagi fikrlari</span> </h2>
            </div>
            <ul className="text-white flex flex-col gap-y-[20px] text-[20px] mt-[40px]" >
                <li id="lo" className="lo w-[679px]">Abdukarim Mirzaevning 1-halqa tinglovchilaridan biri bo`lish imkonini bergan Robbimga hamdlar bo'lsin! Mening nazarimda bu bilimlar hozirgi kunda juda muhim.</li>
                <li id="lo" className="lo w-[685px]">Darsda o'tilgan mavzulardan foydalanib bir sifatli video, audio, tekst, va hkz tayyorlasa tinglovchi va ko'ruvchilarga yaxshi mahsulot yetib borsa, menimcha bizning ustoz niyatlariga yetgan bo’lardilar deb o'ylayman.</li>
            </ul >
       <p className="pt-[40px]">Baxrom Abduqayyum</p>
        </div>
        </footer>
            
        </>
    );
};

export default page;