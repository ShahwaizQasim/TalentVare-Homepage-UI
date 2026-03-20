import type { JobCardProps } from "../types";
import CardImg from "../assets/cards.png";
import locationIcon from "../assets/locationIcon.png";
import ClockIcon from "../assets/clockIcon.png";
import { CustomButton } from "./Buttons";


export default function JobCard({
  title = "UI/UX Designer",
  company = "Teams",
  location = "Seattle, USA (Remote)",
//   type = "Full-time",
  postedAgo = "1 day ago",
  applicants = 23,
  isPromoted = false,
//   isSaved = false,
}: JobCardProps) {

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex flex-col gap-2.5 hover:shadow-md hover:border-blue-100 transition-all duration-200 group">
      {/* Promoted badge */}
      {isPromoted && (
        <span className="text-[10px] font-bold text-dark2 rounded-full px-2 w-fit">
          Promoted
        </span>
      )}

      {/* Company & bookmark */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Logo placeholder */}
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
            <img src={CardImg} alt="card_img" />
          </div>
          <div>
            <h4 className="text-[14px] text-dark2 leading-tight group-hover:text-blue-600 font-Inter transition-colors">
              {title}
            </h4>
            <p className="text-[12px] text-dark2">{company}</p>
          </div>
        </div>
        {/* <button
          onClick={() => setSaved(!saved)}
          className="mt-0.5 p-1 rounded-md hover:bg-gray-100 transition-colors flex-shrink-0"
          aria-label="Save job"
        >
          <BookmarkIcon filled={saved} />
        </button> */}
      </div>

      {/* Meta info */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img
            src={locationIcon}
            alt="location_icon"
            className="h-3 mt-[3px]"
          />
          <span className="text-[12px] font-Inter text-[#585D6E]">
            {location}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <img src={ClockIcon} alt="clock_icon" className="h-3" />
            <span className="text-[11px] font-Inter text-[#585D6E]">
              {postedAgo} ||{" "}
              <span className="font-Inter text-[#0154AA]">
                {applicants} applicants
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Apply button */}
      <CustomButton label={"Apply Now"} className="text-[12px] font-Inter" />
    </div>
  );
}
