import ECMemberCard from "../ecpage/ECMemberCard";

function ECMemberCarousel() {
  return (
    <div>
      <h1>Current Executive Committee</h1>
      <ECMemberCard />
      <button>Learn More</button>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default ECMemberCarousel;
