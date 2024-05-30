import {GalleryCard} from "../gallerypage/GalleryCard";

function GallerySection() {
  return (
    <div>
      <h1 className="flex flex-col items-center">Gallery</h1>
      <GalleryCard />
      
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default GallerySection;
