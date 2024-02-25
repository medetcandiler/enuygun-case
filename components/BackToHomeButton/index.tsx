import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const BackToHomeButton = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/");
  };
  return (
    <StyledButton title="Back to home" onClick={() => handleClick()}>
      <Image
        src="/back-button.svg"
        width={26}
        height={26}
        alt="back button icon"
      />
    </StyledButton>
  );
};

export default BackToHomeButton;
