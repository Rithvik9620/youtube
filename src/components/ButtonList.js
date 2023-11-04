import React from "react";
import Button from "./Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ButtonList = () => {
  const scrollRight = () => {
    const container = document.querySelector(".scrollBar");
    const start = container.scrollLeft;
    const end = start + 100; // Adjust scroll amount as needed
    const duration = 500; // Duration of the scroll animation in milliseconds

    let startTime = null;

    function animation(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const next = Math.easeInOutQuad(
        timeElapsed,
        start,
        end - start,
        duration
      );
      container.scrollLeft = next;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  };

  function scrollLeft() {
    const container = document.querySelector(".scrollBar");
    const start = container.scrollLeft;
    const end = start - 100; // Adjust scroll amount as needed
    const duration = 500; // Duration of the scroll animation in milliseconds

    let startTime = null;

    function animation(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const next = Math.easeInOutQuad(
        timeElapsed,
        start,
        end - start,
        duration
      );
      container.scrollLeft = next;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className="py-4 relative">
      <div className="flex absolute top-0 bottom-0 left-0 items-center z-40 p-2">
        <BsChevronLeft
          onClick={scrollLeft}
          className="rounded-full hover:bg-gray-700 p-2"
          size={30}
        />
      </div>
      <div className="flex overflow-x-auto scrollbar-none mx-10 scrollBar">
        <div className="p-2 mr-2 ml-6 bg-gray-800 text-sm hover:bg-gray-700 rounded-md shrink-0">
          All
        </div>
        <Button text={"Gaming"} />
        <Button text={"Live"} />
        <Button text={"Music"} />
        <Button text={"Cricket"} />
        <Button text={"Comedy"} />
        <Button text={"News"} />
        <Button text={"Current Affairs"} />
        <Button text={"HollyWood Music"} />
        <Button text={"Movies"} />
        <Button text={"Trailers"} />
        <Button text={"Songs"} />
        <Button text={"Teasers"} />
        <Button text={"Technology"} />
        <Button text={"Recently Uploaded"} />
        <Button text={"Watched"} />
        <Button text={"New to you"} />
        <Button text={"Software"} />
        <Button text={"Coding"} />
        <Button text={"Data Science"} />
        <Button text={"Javascript"} />
        <Button text={"Experiments"} />
      </div>
      <div className="w-20 inset-y-0 right-2 absolute bg-gradient-to-l from-black z-30"></div>
      <div className="w-20 inset-y-0 left-8 absolute bg-gradient-to-r from-black z-30"></div>
      <div className="flex items-center absolute right-0 top-0 bottom-0 z-40">
        <BsChevronRight
          onClick={scrollRight}
          className="rounded-full hover:bg-gray-700 p-2"
          size={30}
        />
      </div>
    </div>
  );
};

export default ButtonList;
