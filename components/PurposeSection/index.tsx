"use client";
import styled from "styled-components";
const LandingPageSection = styled.section`
  background-color: #f4f4f4;
  padding: 50px 120px;
  text-align: center;
  color: #212529;
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: #343a40;
`;

const PurposeSection = () => {
  return (
    <LandingPageSection>
      <Heading>Welcome to Employee of the Month Selection</Heading>
      <Description>
        Our platform provides a seamless way to nominate and select the Employee
        of the Month, recognizing outstanding contributions and achievements
        within our organization. Start nominating and celebrating excellence
        today!
      </Description>
    </LandingPageSection>
  );
};

export default PurposeSection;
