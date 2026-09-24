import { basePath } from "@/lib/basePath";
const parallaxSection = () => {
  return (
    <div>
      <div className="md:w-full h-75 md:bg-transparent hidden"></div>
      <div
        className="md:hidden w-full h-75"
        style={{ backgroundImage: `url(${basePath}/Image/recipe-baner-1.png)` }}
      ></div>
    </div>
  );
};

export default parallaxSection;
