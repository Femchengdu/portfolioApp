import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
const BtnSwitchCurrent = ({ page, children }) => {
  const { appPage, setAppPage } = useContext(AppContext);
  return appPage === page ? (
    <span className="btnLink btnCurrent">{children}</span>
  ) : (
    <span className="btnLink" onClick={() => setAppPage(page)}>
      {children}
    </span>
  );
};

export default BtnSwitchCurrent;
