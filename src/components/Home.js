import React, { useState, useEffect, useRef } from "react";
import Section from "./Section";
import styled from "styled-components";
import sectionsInfoData from "../Assets/Json/SectionInfo.json";
import { bgImages } from "../Assets/Images";

function Home() {
  const [content, setContent] = useState({
    title: "",
    description: {},
    leftBtn: "",
    rightBtn: "",
    bouncingBtn: false,
  });
  const [currentSection, setCurrentSection] = useState("model-3");
  const [sectionHeight, setSectionHeight] = useState(0);
  const sectionHeightRef = useRef();
  sectionHeightRef.current = sectionHeight;
  const [isWindowResized, setIsWindowResized] = useState(false);

  const sectionsInfo = Object.values(sectionsInfoData);
  const home = useRef();

  /*  Determine which sections are in the viewport while scrolling
  - To help with smooth scroll */
  const isAnyPartOfElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || home.current.clientHeight;
    const vertInView =
      rect.top + 5 <= windowHeight && rect.top + rect.height - 5 >= 0;

    return vertInView;
  };

  // Updating section height value on window resize
  const updateSectionHeight = (height) => {
    sectionHeightRef.current = height;
  };

  // Controling the opacity of texts and buttons on scrolling
  const controlOpacity = () => {
    let currentOpacity;

    if (
      home.current.scrollTop % sectionHeightRef.current <
      sectionHeightRef.current / 5
    ) {
      currentOpacity =
        1 - (((home.current.scrollTop * 5) / sectionHeightRef.current) % 1);

      [...document.getElementsByClassName("fade")].forEach(
        (element) => (element.style.opacity = currentOpacity)
      );
    } else if (
      home.current.scrollTop % sectionHeightRef.current >
      (sectionHeightRef.current * 4) / 5
    ) {
      currentOpacity =
        ((home.current.scrollTop * 5) / sectionHeightRef.current) % 1;

      [...document.getElementsByClassName("fade")].forEach((element) => {
        element.style.opacity = currentOpacity;
      });
    } else {
      [...document.getElementsByClassName("fade")].forEach((element) => {
        element.style.opacity = 0;
      });
    }
  };

  useEffect(() => {
    const homeCurrent = home.current;
    const sectionContent = sectionsInfo.find(
      (element) => element.id === currentSection
    );
    setContent({
      title: sectionContent.title,
      description: { ...sectionContent.description },
      leftBtn: sectionContent.leftBtn,
      rightBtn: sectionContent.rightBtn,
      bouncingBtn: sectionContent.bouncingBtn,
    });

    let sections = [...document.getElementsByClassName("section")];
    sections.length && setSectionHeight(sections[0].offsetHeight);

    let lastScrollTop = 0;
    const smoothScroll = () => {
      // Get the direction of Scroll
      let st = window.pageYOffset || homeCurrent.scrollTop;

      let scrolledSection;
      if (st > lastScrollTop) {
        // Scrolling Down
        scrolledSection = sectionsInfo
          .filter((element) =>
            isAnyPartOfElementInViewport(document.getElementById(element.id))
          )
          .slice(-1)[0];
      } else {
        // upscroll code
        scrolledSection = sectionsInfo
          .filter((element) =>
            isAnyPartOfElementInViewport(document.getElementById(element.id))
          )
          .slice(0, 1)[0];
      }
      lastScrollTop = st <= 0 ? 0 : st;

      // Set the state to the scrolled section
      setCurrentSection(scrolledSection.id);
    };

    window.addEventListener("resize", () => setIsWindowResized(true));
    homeCurrent.addEventListener("scroll", () => smoothScroll());
    homeCurrent.addEventListener("scroll", () =>
      controlOpacity(sectionHeightRef.current)
    );

    return () => {
      window.removeEventListener("resize", () => setIsWindowResized(true));
      homeCurrent.removeEventListener("scroll", () => smoothScroll());
      homeCurrent.removeEventListener("scroll", () =>
        controlOpacity(sectionHeightRef.current)
      );
    };
  }, []);

  useEffect(() => {
    const sectionContent = sectionsInfo.find(
      (element) => element.id === currentSection
    );
    setTimeout(() => {
      document.getElementById(currentSection).scrollIntoView();
    }, 200);

    setTimeout(() => {
      setContent({
        title: sectionContent.title,
        description: { ...sectionContent.description },
        leftBtn: sectionContent.leftBtn,
        rightBtn: sectionContent.rightBtn,
        bouncingBtn: sectionContent.bouncingBtn,
      });
    }, 500);

    return () => {};
  }, [currentSection]);

  useEffect(() => {
    if (isWindowResized) {
      let sections = [...document.getElementsByClassName("section")];
      sections.length && setSectionHeight(sections[0].offsetHeight);
      isWindowResized && updateSectionHeight(sections[0].offsetHeight);
      setIsWindowResized(false);
    }
    return () => {};
  }, [isWindowResized]);

  return (
    <Container ref={home} id="home" home={home}>
      {sectionsInfo.map(({ id, backgroundImg }) => {
        return (
          <Section
            controlOpacity={controlOpacity}
            id={id}
            title={content.title}
            description={content.description}
            backgroundImg={`url(${bgImages[backgroundImg]})`}
            leftBtn={content.leftBtn}
            rightBtn={content.rightBtn}
            bouncingBtn={content.bouncingBtn}
            key={`${id}-${new Date().getTime()}`}
          />
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  /* scroll-snap-type: y mandatory; */
`;
