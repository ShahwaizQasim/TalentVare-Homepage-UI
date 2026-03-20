import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import type { JobCardProps } from "../types";
import JobSection from "./JobSection";
import CustomSelect from "./Dropdown";
import { JobTypeData, locationOptions } from "../utils/data";
import { CustomButton } from "./Buttons";


const filterTags = ["Frontend", "Backend", "Graphic Designer"];

const featuredJobs: JobCardProps[] = Array(5)
  .fill(null)
  .map((_, i) => ({
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedAgo: "1 day ago",
    applicants: 20 + i * 3,
    isPromoted: true,
    isSaved: false,
  }));

const recommendedJobs: JobCardProps[] = Array(10)
  .fill(null)
  .map((_, i) => ({
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedAgo: "1 day ago",
    applicants: 18 + i * 2,
    isPromoted: false,
    isSaved: i === 2,
  }));

const latestJobs: JobCardProps[] = Array(10)
  .fill(null)
  .map((_, i) => ({
    title: "UI/UX Designer",
    company: "Teams",
    location: "Seattle, USA (Remote)",
    postedAgo: "1 day ago",
    applicants: 15 + i * 4,
    isPromoted: false,
    isSaved: false,
  }));

// ── Main Dashboard ────────────────────────────────────────────────────────────

export default function Dashboard() {
  const [activeTag, setActiveTag] = useState("Similar");
  const [value, setValue] = useState("");
  const [JobType, setJobType] = useState("");

  return (
    <div className="min-h-screen bg-[#F4F4F4] font-sans">
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex gap-5">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Right Content */}
        <div className="flex-1 min-w-0 flex flex-col gap-7">
          {/* Hero Banner */}
          <div className="pt-2 pb-14">
            <div className="max-w-6xl mx-auto flex items-end justify-between gap-4">
              {/* Left text */}
              <div className="flex-1">
                <h1 className="text-dark2 text-[22px] font-Inter font-bold">
                  Find your Dream Job,{" "}
                  <span className="text-[#0154AA]">Albert!</span>
                </h1>
                <p className="text-[#585D6E] text-[14px] mt-1">
                  Explore the latest job openings or apply for the best
                  opportunities available today!
                </p>
              </div>
            </div>
          </div>

          {/* Search panel (overlapping banner) */}
          <div className="container mx-auto -mt-14 relative z-10">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <div className="flex flex-col gap-3">
                {/* Search Row */}
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Job Title, Company, or Keywords"
                    className="flex-1 h-9 px-3 rounded-lg border border-gray-100 bg-white text-[14px] text-[#585D6E] font-Inter placeholder-gray-400 outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-all"
                  />
                  <CustomSelect
                    options={locationOptions}
                    placeholder="Select Location"
                    value={value}
                    onChange={(val) => setValue(val)}
                  />
                  <CustomSelect
                    options={JobTypeData}
                    placeholder="Select Job Type"
                    value={JobType}
                    onChange={(val) => setJobType(val)}
                  />
                  <CustomButton label={"Search"} img={true} />
                </div>
              </div>
            </div>
            {/* Filter Tags */}
            <div className="flex items-center mt-5 gap-2 flex-wrap">
              <span className="text-[14px] text-[#737A91] font-Inter whitespace-nowrap">
                Similar:
              </span>
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-[12px] font-Inter px-3.5 py-1 rounded-md border transition-all ${
                    activeTag === tag
                      ? "border-blue-600 text-blue-600"
                      : "bg-transparent text-[#737A91] border-[#737A91] hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <JobSection
            title="Featured Jobs"
            seeAllLabel="See Featured Jobs"
            jobs={featuredJobs}
            columns={5}
          />
          <JobSection
            title="Recommended Jobs"
            seeAllLabel="See Recommended Jobs"
            jobs={recommendedJobs}
            columns={5}
          />
          <JobSection
            title="Latest Jobs"
            seeAllLabel="See Latest Jobs"
            jobs={latestJobs}
            columns={5}
          />
        </div>
      </div>
    </div>
  );
}
