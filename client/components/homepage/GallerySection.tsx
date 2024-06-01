import GalleryCard from "../gallerypage/GalleryCard";

function GallerySection() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-around ">
        <h1 className="text-6xl text-red-600 font-bold	">Gallery</h1>
        <GalleryCard />

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-red-600 rounded-lg group bg-red-600 hover:text-black dark:text-red">
          <span className="relative font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-md group-hover:bg-opacity-0">
            See more
          </span>
        </button>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default GallerySection;
