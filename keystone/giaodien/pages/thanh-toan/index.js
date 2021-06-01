import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useDisclosure,
  Container,
  SimpleGrid,
  Tag,
  PopoverContent,
  Grid,
  GridItem,
  useNumberInput,
  Input,
  Center,
} from "@chakra-ui/react";
import {
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import ChiTietDonHangList from "../../components/ChiTietDonHang/List";
import ChiTietDonHangListUI from "../../components/ChiTietDonHang/List/UI";
import DonHangCreate from "../../components/DonHang/Create";
import DonHangCreateUI from "../../components/DonHang/Create/UI";

export default function ThanhToan() {

  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  
  return (
    <Box bg={"gray.50"}>  
      <Box bg={"gray.50"} color={"black"}>
        <Container maxW={"container.xl"} bg="white" py={10}>
          <Box borderWidth={1} bg={"gray.50"}>
            <br></br>
              <Grid
              h="50px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={4}
              >
              <GridItem rowSpan={1} colSpan={1}>
                  <Center mb={20}><b>Sản phẩm</b></Center>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Giá</b></Center>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Số lượng</b></Center>
              </GridItem>
              <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Thành tiền</b></Center>
              </GridItem>            
              </Grid>
          </Box>  
          <ChiTietDonHangList UI={ChiTietDonHangListUI} />
          <br/>     
          <br/>      
          <DonHangCreate UI={DonHangCreateUI}/>
        </Container>
      </Box>
    </Box>
  );
}

