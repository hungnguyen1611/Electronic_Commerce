import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";

export default function ButtonToTop() {
  return (
    <ScrollToTop
      smooth
      // top={100}
      component={<IoIosArrowDropup />}
      style={{
        background: "transparent",
        bottom: 70,
        right: 40,
        color: "#1976d2",
        fontSize: "2.5rem",
        padding: 0,
        borderRadius: "50%",
        boxShadow: "0 0 10px #1976d2",
        position: "fixed",

        // boxShadow: 'none'
        // stroke: "#fff",
        // fill: "#fff",
      }}
    />
  );
}
