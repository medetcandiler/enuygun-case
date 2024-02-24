import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.1)
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
        width={32}
        height={32}
        alt="back button icon"
      />
    </StyledButton>
  );
};

export default BackToHomeButton;
