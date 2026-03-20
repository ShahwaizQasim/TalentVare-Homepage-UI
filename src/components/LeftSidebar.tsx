import { useState } from "react";
import UserImg from "../assets/user2.png";
import { stats } from "../utils/data";

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path
      d="M3 5L7 9L11 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);



export default function LeftSidebar() {
  const [calendarOpen, setCalendarOpen] = useState(true);

  return (
    <aside className="w-[22.458vw] flex-shrink-0 flex flex-col gap-3">
      {/* Profile Card */}
      <div className="flex flex-col gap-4 rounded-xl overflow-hidden">
        <div className="bg-white rounded-xl border border-gray-100 shadow-md">
          {/* Cover Image */}
          <div className="relative h-24">
            <div className="absolute inset-0 opacity-100 background-cover-image" />
          </div>

          {/* Avatar */}
          <div className="flex justify-center -mt-10 mb-2 px-4">
            <div className="relative">
              <img
                src={UserImg}
                alt="user_img"
                className="object-contain h-24 w-24 "
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center px-3 pb-3">
            <h3 className="font-[600] text-dark2 text-[18px] font-Inter">
              Albert Flores
            </h3>
            <p className="text-[14px] text-dark2 leading-tight">
              Senior Product Designer | UI/UX
              <br />
              Designer | Graphic Designer | Web...
            </p>
            <p className="text-[12px] text-[#585D6E] mt-1">Cairo, Missouri</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100">
          {/* Stats */}
          <div className="px-3 py-4 flex flex-col gap-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-0.5 border-b border-[#E9ECEF]"
              >
                <span className="text-[14px] text-dark2">{stat.label}</span>
                <span className={`text-[14px] text-[#0154AA]`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
         <div>
        {/* My Calendar */}
        <div className="bg-white rounded-xl border border-gray-100 py-3 shadow-sm overflow-hidden">
          <button
            onClick={() => setCalendarOpen(!calendarOpen)}
            className="w-full flex items-center justify-between px-3  hover:bg-gray-50 transition-colors"
          >
            <span className="font-size-16px font-bold text-dark2">
              My calendar
            </span>
            <ChevronDown open={calendarOpen} />
          </button>
            <p className="text-[14px] text-[#737A91] pl-3">
                    Upcoming Interviews
                  </p>

          {/* {calendarOpen && (
            <div className="px-3 pb-3 border-t border-gray-50">
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect
                      x="1"
                      y="2"
                      width="11"
                      height="10"
                      rx="1.5"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M4 1V3M9 1V3"
                      stroke="#2563EB"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path d="M1 5.5H12" stroke="#2563EB" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                
                  <p className="text-[11px] text-blue-600">3 upcoming events</p>
                </div>
              </div>
            </div>
          )} */}
        </div>
      </div>
      </div>
     
    </aside>
  );
}
