import { certifications } from "@/lib/data";
import { LuBadgeCheck } from "react-icons/lu";

export default function Certifications() {
  return (
    <div className="w-full">
      <h3 className="text-[#f5f5f5] text-3xl md:text-4xl font-semibold md:mb-6">
        Certifications
      </h3>
      <ul className="space-y-4 mt-4">
        {certifications.map((c) => (
          <li
            key={c.title}
            className="md:w-[400px] w-full flex items-center gap-3 p-4 bg-[rgba(20,20,20,0.61)] rounded-2xl border border-[rgba(255,255,255,0.08)] hover:bg-opacity-80 transition-all"
          >
            <LuBadgeCheck className="text-[#A9FF5B] size-8 shrink-0" />
            <div className="min-w-0">
              <p className="text-[#f5f5f5] text-lg font-medium leading-tight">
                {c.title}
              </p>
              <p className="text-[#a1a1aa] text-sm">
                {c.issuer} • {c.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
