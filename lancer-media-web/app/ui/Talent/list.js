import { talents } from "@/app/data/staticData";
import TalentCard from "@/app/ui/Talent/talentCard";

const ListTalent = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {talents.map((talent) => (
        <TalentCard key={talent.name} {...talent} />
      ))}
    </div>
  );
};

export default ListTalent;
