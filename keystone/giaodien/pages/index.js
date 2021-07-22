import { Fragment, useState } from "react";
import PhanLoaiList from "../components/Phanloaisach/List";
import PhanLoaiListUI from "../components/Phanloaisach/List/UI";
import SachList from "../components/Sach/List";
import SachListUI from "../components/Sach/List/UI";
import ThanhTieuDe from "../components/ThanhTieuDe";
import ThanhTieuDeUI from "../components/ThanhTieuDe/UI";
import ChanTrangUI from "../components/ChanTrang/UI";
import {
  SimpleGrid,
  Grid,
  GridItem,
  Flex,
  Box,
  Center,
} from "@chakra-ui/layout";
import { Button, Container, position } from "@chakra-ui/react";

export default function Home({singout}) {
  // console.log(singout);
  // Tim kiem
  const [keyword, setKeyword] = useState();
  const change = (e) => {
    const { value } = e.target;
    if (value.length > 0) setKeyword(value);
  };
  // console.log(keyword);

  const [where, setWhere] = useState({});

  const clickPhanLoai = (phanloai) => {
    setWhere({ phanLoaiSach: { id: phanloai.id } });
  };

  return (
    <Fragment>
      <ThanhTieuDe UI={ThanhTieuDeUI} change={change} />
      <Container maxW="container.xl" >
        <Grid templateColumns="repeat(8, 1fr)" gap={4} margin={10}>
          <GridItem colSpan={2} bg="white">
            <Button bg="#66CDAA" w={280}>
              <Center>DANH MỤC SÁCH</Center>
            </Button>
            <PhanLoaiList
              UI={PhanLoaiListUI}
              clickPhanLoai={clickPhanLoai}
              margin={20}
            />
          </GridItem>
          <GridItem colSpan={6} bg="white">
            <SimpleGrid columns={3}  rowGap={3} spacingX="2px">
              <SachList
                first={30}
                UI={SachListUI}
                where={{ AND: [{ tenSach_contains_i: keyword }, where] }}
              />
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Container>
      {/* <RoomItem UI={RoomItemUI} />  */}
      {/* </ChatProvider> */}
      <ChanTrangUI />
    </Fragment>
  );
}
