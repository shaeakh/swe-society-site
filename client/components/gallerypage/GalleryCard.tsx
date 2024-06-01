import { HoverEffect } from "../ui/card-hover-effect";

export default function GalleryCard() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={object} />
    </div>
  );
}
export const object = [
  {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  }, {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  },
  {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  }, {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  },
  {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  }, {
    link: "https://stripe.com",
    img_link: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  },
];
