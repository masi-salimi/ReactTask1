function ProjectsList({ catBy, sortBy, projects }) {
  let sortedProjects =
    catBy != "all"
      ? projects.filter((p) => p.category.englishTitle.includes(catBy))
      : projects;

  if (sortBy == "earliest")
    sortedProjects = [...sortedProjects].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );

  if (sortBy == "latest")
    sortedProjects = [...sortedProjects].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

  return (
    <div>
      <div className="mt-10">
        <table className="min-w-full ">
          <PrjHeader />
          {sortedProjects.map((p) => (
            <PrjBody key={p._id} project={p} />
          ))}
        </table>
      </div>
    </div>
  );
}

function PrjHeader() {
  return (
    <thead className=" bg-gray-200 font-bold text-sm">
      <tr>
        <th className="px-6 py-3 text-right  font-medium  ">#</th>
        <th className="px-6 py-3 text-right  font-medium  ">عنوان پروژه</th>
        <th className="px-6 py-3 text-right  font-medium  ">بودجه</th>
        <th className="px-6 py-3 text-right  font-medium  ">ددلاین</th>
        <th className="px-6 py-3 text-right  font-medium  ">وضعیت</th>
        <th className="px-6 py-3 text-right  font-medium  ">عملیات</th>
      </tr>
    </thead>
  );
}

function PrjBody({ project }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <tbody>
      <tr className="bg-white text-right text-gray-600  text-sm">
        <td className="px-6 py-4 whitespace-nowrap">{project._id}</td>
        <td className="px-6 py-4 whitespace-nowrap"> {project.title}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {new Intl.NumberFormat().format(project.budget)}
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          {new Date(project.deadline).toLocaleString("en-US", options)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="bg-red-600 text-white px-1 rounded-lg text-xs">
            {project.status}
          </span>
        </td>
        <td className="px-6 py-4 text-right whitespace-nowrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="size-6 stroke-blue-700"
          >
            <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
        </td>
      </tr>
    </tbody>
  );
}
export default ProjectsList;
