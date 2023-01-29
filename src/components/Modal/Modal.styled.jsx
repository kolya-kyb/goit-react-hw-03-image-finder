import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: lightgrey;
  z-index: 999;
`;

export const ModalWindow = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  min-height: 200px;
  min-width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Close = styled.span`
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: red;
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
