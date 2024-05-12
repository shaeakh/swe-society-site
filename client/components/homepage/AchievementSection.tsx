import AchievementCard from "../achievementspage/AchievementCard";

function AchievementSection() {
  return (
    <div>
      <h1>Achievements</h1>
      <AchievementCard />
      <button>See More</button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default AchievementSection;
