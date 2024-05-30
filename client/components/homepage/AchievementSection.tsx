import { AchievemenCard } from "../achievementspage/AchievementCard";

function AchievementSection() {
  return (
    <div>
      <h1 className="flex flex-col items-center">Achievements</h1>
      <AchievemenCard />
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default AchievementSection;
