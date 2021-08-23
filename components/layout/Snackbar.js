/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';

const Modal = styled.section`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 200px;
  transform: translate(-50%, -100%);
  text-align: center;
  padding: 2rem 1rem;
  transition-delay: 0.5s;
  transition: all 0.3s ease-out;
  left: 50%;
  top: 0;
  color: white;
  font-size: 2rem;
  letter-spacing: 0.05em;
  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0px;
      transform: translate(-50%, 0);
      transition: all 0.45s ease-in;
    `}
  ${({ variant }) =>
    variant === 'success' &&
    css`
      background-color: var(--Primary)};
      color: var(--OnMidground)};
      border-bottom: 2px solid var(--PrimaryLight);
    
    `}
  ${({ variant }) =>
    variant === 'error' &&
    css`
      background-color: var(--ErrorLight);
      border-bottom: 2px solid var(--Error);
      color: var(--OnErrorLight)};
    `}
  ${({ variant }) =>
    variant === 'info' &&
    css`
      background-color: var(--AccentLight);
      border-bottom: 2px solid var(--Accent);
      color: var(--OnAccent)};
    `}
  ${({ variant }) =>
    variant === 'hidden' &&
    css`
      transform: translate(-50%, -100%);
      top: 0;
    `};
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0;
  &::after,
  &::before {
    content: '';
    height: 100%;
    width: 2px;
    background-color: white;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`;

const Snackbar = ({
  closeButton,
  isOpen,
  variant,
  dismissOnClick,
  message,
}) => (
  <Modal isOpen={isOpen} variant={variant}>
    {closeButton && (
      <CloseBtn name="button" onClick={dismissOnClick}>
        close
      </CloseBtn>
    )}
    {message}
  </Modal>
);

export default Snackbar;
