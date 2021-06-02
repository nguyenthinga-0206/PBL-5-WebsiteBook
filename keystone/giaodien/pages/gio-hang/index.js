import {
  Box,
  Flex,
  Text,
  Textarea,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  Container,
  SimpleGrid,
  Divider,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  Image,
  Input,
  Center,
  Portal,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import GioHangList from "../../components/GioHang/List";
import GioHangListUI from "../../components/GioHang/List/UI";
import ThanhTieuDeDangXuatUI from "../../components/ThanhTieuDe/UIDangXuat";
import ChanTrangUI from "../../components/ChanTrang/UI";
import { Fragment } from "react";

export default function GioHang({id, tenSach,}) {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 100,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });
  return (
    <Fragment>
      <ThanhTieuDeDangXuatUI/>
      <Box bg={"gray.500"}>
        <Box bg={"gray.50"} color={"black"}>
          <Container maxW={"container.xl"} bg="white" py={10}>
              <Heading size="lg" ml={14}>
                <i>Giỏ Hàng</i>
              </Heading>
              <br />
              <br />
              <hr></hr>
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(6, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={1} colSpan={3}>
                  <Center mb={20}><b>Sản phẩm</b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Số lượng </b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Thành tiền</b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Xóa</b></Center>
                </GridItem>
              </Grid>

              <GioHangList UI={GioHangListUI}/>

              <br/>
              <br/>
              <Grid
                  h="50px"
                  templateColumns="repeat(2, 1fr)"
                  gap={4}
              >
                  <GridItem colSpan={1}>
                      <b>Tong Tien: </b>
                      12233d
                  </GridItem>
                  <GridItem colSpan={1}>
                      <Button
                      onClick={(e) => {
                      router.push("/thanh-toan");
                      }}
                      display={{ base: "none", md: "inline-flex" }}
                      fontSize={"x-small"}
                      w={'100px'}
                      fontWeight={600}
                      color={"white"}
                      bg={"#66CDAA"}
                      href={"#"}
                      _hover={{
                      bg: "#276749",
                      }}
                  >
                      Mua hàng
                  </Button>
                  </GridItem>
              </Grid>
          </Container>
        </Box>
      </Box>
      <ChanTrangUI/>
    </Fragment>
  );
}