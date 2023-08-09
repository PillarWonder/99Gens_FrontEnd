import React, { createContext, useState, useContext } from "react";

export const ApplicationContext = createContext();

export const useApplicationContext = () => useContext(ApplicationContext);

const Provider = ({ children }) => {
  const [applicationState, setApplicationState] = useState({
    detailedDescription: "",
    accountstep: 1,
    signupEmail: "",
    detailedDescription_tab: "",
    email: "",
    job_id: "",
    carouselPageCount: 6,
    currentThumbnail: 1,
    mycreationsSelectedItemIndex: 0,
    mycreationsSelectedCount: 0,
  });

  return (
    <ApplicationContext.Provider
      value={{ applicationState, setApplicationState }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
