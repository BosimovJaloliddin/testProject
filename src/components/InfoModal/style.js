import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  background-color: #69768775;
`;
export const Wrapper = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  padding: 32px 24px;
  background-color: white;
  border-radius: 7px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-top: 14px;
  border-bottom: 1px solid var(--secondary-text-color);
`;
export const Info = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 4px;
  color: ${({ cl }) => (cl ? cl : "#222222")};
`;
export const TreeImg = styled.img`
  border-radius: 7px;
`;
