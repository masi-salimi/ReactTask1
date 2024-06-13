function ProjectsCat({ category, catBy, onCat }) {
  
  return (
    <select
      value={catBy}
      onChange={onCat}
      className=" flex  px-4 bg-white  rounded-xl shadow-md font-sans"
    >
      <option value="all">دسته بندی(همه)</option>
      {category.map((c) => (
        <Options key={c.id} title={c.title} etitle={c.englishTitle} />
      ))}

      {/* <option value="all">دسته بندی(همه)</option>
      <option value="web">برنامه نویسی وب</option> */}
    </select>
  );
}

function Options({ title, etitle }) {
  return <option value={etitle}>{title}</option>;
}
export default ProjectsCat;
