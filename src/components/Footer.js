import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      {links.map((element) => (
        <a href={element.link} key={`${element.title}_${new Date().getTime()}`}>
          {element.title}
        </a>
      ))}
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  color: black;
`;

const links = [
  { title: "Tesla © 2022", link: "https://www.tesla.com/about" },
  { title: "Privacy & Legal", link: "https://www.tesla.com/legal" },
  { title: "Contact", link: "https://www.tesla.com/contact" },
  { title: "Careers", link: "https://www.tesla.com/careers" },
  { title: "News", link: "https://www.tesla.com/blog" },
  { title: "Engage", link: "https://engage.tesla.com/" },
  { title: "Locations", link: "https://www.tesla.com/findus/list" },
];
