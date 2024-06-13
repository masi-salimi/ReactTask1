function ProjectsSort({ sortBy, onSort }) {
  return (
    <select
      value={sortBy}
      onChange={onSort}
      className=" flex px-4 bg-white  rounded-xl shadow-md font-sans"
    >
      <option value="latest">مرتب سازی نزولی</option>
      <option value="earliest">مرتب سازی صعودی</option>
    </select>
  );
}

export default ProjectsSort;
