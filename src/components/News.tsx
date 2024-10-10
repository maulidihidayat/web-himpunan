import React from "react";

const index = () => {
  return (
    <div>
      <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg  hover:shadow-lg transition-shadow duration-300 w-72 h-90">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src="https://images.unsplash.com/photo-1496436818536-e239445d3327?q=80&w=1200"
            alt="investment-seed-round"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-lg font-semibold bg-customDarkenBlue w-[65px] text-[16px] text-center text-white">
            Hari ini
          </h6>
          <p className="text-slate-600 leading-normal font-light text-[12px]">
            "Pagi itu, aroma kopi menguar, menyelinap melalui celah jendela yang
            terbuka setengah. Sinar matahari yang hangat menembus tirai, seakan
            mengundang untuk merasakan ketenangan pagi. Setiap tegukan, memberi
            rasa pahit dan manis yang berpadu sempurna, membangkitkan semangat
            untuk menyambut hari baru."
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-customDarkenBlue transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Read article
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
