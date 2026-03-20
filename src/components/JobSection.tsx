import type { JobCardProps } from "../types";
import JobCard from "./Jobcard";

interface JobSectionProps {
  title: string;
  seeAllLabel?: string;
  jobs: JobCardProps[];
  columns?: number;
}

export default function JobSection({
  title,
  seeAllLabel = "See Feature Jobs",
  jobs,
  columns = 5,
}: JobSectionProps) {
 const gridCols: Record<number, string> = {
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

  console.log("++++++++", seeAllLabel);
  

  return (
    <section className="flex flex-col gap-3">
      {/* Section Header */}
      <div className="flex gap-3">
        <h2 className="text-[18px] text-dark2 font-Inter">
          {title}
        </h2>
        {seeAllLabel && (
          <p
            className="text-[14px] cursor-pointer font-medium text-[#0154AA] underline underline-offset-2 hover:text-blue-700"
          >
            {seeAllLabel}
          </p>
        )}
      </div>

      {/* Cards Grid */}
      <div className={`grid gap-3 ${gridCols[columns] ?? gridCols[5]}`}>
        {jobs.map((job, i) => (
          <JobCard key={i} {...job} />
        ))}
      </div>
    </section>
  );
}
