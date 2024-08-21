import { useState } from "react";
import { Button, Container, Cricle, ImgOne, Wrapper } from "./style";
import InfoModal from "../InfoModal";
import { treeInfo } from "../../mock/tree";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  //   const [tree, setTree] = useState(treeInfo || []);
  const [oneTree, setOneTree] = useState({});

  //   const onSetTree = (e) => {
  //     setTree([
  //       ...tree,
  //       {
  //         id: tree.length + 1,
  //         posX: e.nativeEvent.offsetX,
  //         posY: e.nativeEvent.offsetY,
  //       },
  //     ]);
  //   };

  const getTreeInfo = (id) => {
    const oneTree = treeInfo.find((v) => v.id === id);
    setOneTree(oneTree);
    setOpenModal(true);
  };

  return (
    <div>
      <InfoModal data={oneTree} open={openModal}>
        <Button
          onClick={() => setOpenModal(!openModal)}
          style={{ marginTop: "24px" }}
        >
          Yopish
        </Button>
      </InfoModal>
      <Container className="container">
        <Wrapper>
          <ImgOne />
          {treeInfo.length &&
            treeInfo?.map(({ id, posX, posY }) => {
              return (
                <Cricle
                  onClick={() => getTreeInfo(id)}
                  key={id}
                  posx={posX}
                  posy={posY}
                >
                  {id}
                </Cricle>
              );
            })}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;
