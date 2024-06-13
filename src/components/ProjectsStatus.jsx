import { useState } from "react";

function ProjectsStatus({ onSelectFilter }) {
  const [filterBy, setFilter] = useState("all");
  return (
    <div className="flex  p-1   gap-2">
      <span className="mt-2 ">وضعیت</span>
      <div className="  flex p-1 bg-white rounded-xl shadow-md items-center justify-around">
        <button
          onClick={() => {
            onSelectFilter("all");
            setFilter("all");
          }}
          className={
            filterBy == "all"
              ? " flex-1 p-1 px-4 rounded-md  bg-blue-400  shadow-outline-blue transition-all"
              : " flex-1 p-1 px-4 rounded-md"
          }
        >
          همه
        </button>
        <button
          onClick={() => {
            onSelectFilter("OPEN");
            setFilter("OPEN");
          }}
          className={
            filterBy == "OPEN"
              ? " flex-1 p-1 px-4 rounded-md  bg-blue-400   shadow-outline-blue transition-all"
              : " flex-1 p-1 px-4 rounded-md"
          }
        >
          باز
        </button>
        <button
          onClick={() => {
            onSelectFilter("CLOSED");
            setFilter("CLOSED");
          }}
          className={
            filterBy == "CLOSED"
              ? " flex-1 p-1 px-4 rounded-md  bg-blue-400  shadow-outline-blue transition-all"
              : " flex-1 p-1 px-4 rounded-md"
          }
        >
          بسته
        </button>
      </div>
    </div>
  );
}

export default ProjectsStatus;
