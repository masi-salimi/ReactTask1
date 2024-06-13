import {
  Children,
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

const projectContext = createContext();
const projectDispatchContext = createContext();

// function projectReducer(projects, action) {
//   return [projects, action.payload];
// }

function Projectcontext({ children }) {

  //   const [projects,dispatch]=useReducer(projectReducer, [])
  //const [project, setProjects] = useState(projects);
  
  return (
    <projectContext.Provider >
      {/* <projectDispatchContext.Provider> */}
      {Children}
      {/* </projectDispatchContext.Provider> */}
    </projectContext.Provider>
  );
}

export function useProjects() {
  return useContext(projectContext);
}

// export function useProjectsDispatch() {
//   return useContext(projectDispatchContext);
// }

export default Projectcontext;
