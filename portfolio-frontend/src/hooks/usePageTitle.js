/* eslint-disable no-fallthrough */
import { useEffect } from "react";

export default ({ appPage }) => {
  useEffect(() => {
    switch (appPage) {
      case "about":
        document.title = "Freenovation | About Me";
        break;
      case "blog":
        document.title = "Freenovation | My Tech Ramblings";
        break;
      case "projects":
        document.title = "Freenovation | My Projects";
        break;
      case "contact":
        document.title = "Freenovation | Hire Me";
        break;
      default:
        document.title = "Freenovation | JavaScript Web Development";
    }
  });
};
