import React, { useState, useEffect, useRef } from "react";
import SideBar from "../../components/sideBar/SideBar";
import MainSection from "../../components/mainSection/MainSection";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import MobileViewSideBar from "./MobileViewSideBar";
import Header from "../../components/common/header/Header";
const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pdfRef = useRef<any>(null);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      const isLaptopOrTablet = window.innerWidth > 768;
      if (isLaptopOrTablet) {
        setShowSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //* funciton for Generate Pdf
  const generatePDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;

        pdf.addImage(
          imgData,
          "PNG",
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save("myresume.pdf");
      });
    }
  };
  return (
    <div className="lg:mt-5 relative" id="resumeTemplate" ref={pdfRef}>
      <MobileViewSideBar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Header
        generatePDF={generatePDF}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-row max-w-4xl mb-7 mx-2 lg:mx-auto shadow-2xl">
        <div className="hidden lg:flex">
          <SideBar />
        </div>
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
