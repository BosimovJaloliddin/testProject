/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { Container, Info, InfoWrapper, TreeImg, Wrapper } from "./style";
import tree from "../../assets/imgs/treeOne.jpg";

const InfoModal = (props) => {
  const { idNum, viloyat, tuman, daraxtTuri, masulTashkilot, manzil } =
    props?.data?.info || {};
  return props?.open
    ? createPortal(
        <Container>
          <Wrapper>
            <TreeImg src={tree} alt="tree" />
            <InfoWrapper>
              <Info>ID raqami</Info>
              <Info cl="#4EBB4A">{idNum}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Info>Viloyat</Info>
              <Info cl="#4EBB4A">{viloyat}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Info>Tuman</Info>
              <Info cl="#4EBB4A">{tuman}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Info>Daraxt turi</Info>
              <Info cl="#4EBB4A">{daraxtTuri}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Info>Ma&apos;sul tashkilot</Info>
              <Info cl="#4EBB4A">{masulTashkilot}</Info>
            </InfoWrapper>
            <InfoWrapper>
              <Info>Manzil</Info>
              <Info cl="#4EBB4A" style={{ textAlign: "right" }}>
                {manzil}
              </Info>
            </InfoWrapper>
            {props.children}
          </Wrapper>
        </Container>,
        document.getElementById("modal")
      )
    : null;
};
export default InfoModal;
