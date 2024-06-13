import { useEffect, useState } from "react";
import "./App.css";
import ProjectsCat from "./components/ProjectsCat";
import ProjectsList from "./components/ProjectsList";
import ProjectsSort from "./components/ProjectsSort";
import ProjectsStatus from "./components/ProjectsStatus";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: 10000,
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },

  {
    _id: 3,
    title: "توسعه3",
    description: "توسعه 3 ویندوز ادمین",
    status: "OPEN",
    category: {
      id: 3,
      title: "برنامه نویسی ویندوز",
      englishTitle: "win development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "توسعه 4",
    description: "توسعه 4 پنل ادمین",
    status: "OPEN",
    category: {
      id: 4,
      title: "برنامه نویسی تحلیل داده",
      englishTitle: "AI development",
    },
    budget: 50000,
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];
function App() {
  const [sortBy, setSortBy] = useState("latest");
  const [catBy, setCatBy] = useState("all");
  const [project, setProjcts] = useState([...projects]);

  const handleFilter = (filterBy) => {
    if (filterBy == "all") return setProjcts(projects);
    if (filterBy == "OPEN")
      return setProjcts(projects.filter((p) => p.status == "OPEN"));
    if (filterBy == "CLOSED")
      return setProjcts(projects.filter((p) => p.status == "CLOSED"));
    return setProjcts(projects);
  };
  return (
    <>
      <h1 className="text-3xl mb-8"> React Live Code. #1</h1>

      <div className="container p-4 bg-gray-200">
        <div className="flex flex-row justify-between    ">
          <div className="text-sm p-1 mt-2 ">لیست پروژه ها</div>

          <div className="flex gap-4   text-sm ">
            <ProjectsStatus onSelectFilter={handleFilter} />
            <ProjectsSort
              sortBy={sortBy}
              onSort={(e) => setSortBy(e.target.value)}
            />
            <ProjectsCat
              category={projects.map((c) => c.category)}
              catBy={catBy}
              onCat={(e) => setCatBy(e.target.value)}
            />
          </div>
        </div>
        <ProjectsList catBy={catBy} sortBy={sortBy} projects={project} />
      </div>
    </>
  );
}

export default App;
