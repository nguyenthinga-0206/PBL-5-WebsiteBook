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
    <Box bg={"gray.500"}>
      <Box bg={"gray.50"} color={"black"}>
        <Container maxW={"container.xl"} bg="white" py={10}>
          <Grid
            h="400px"
            templateRows="repeat(10, 1fr)"
            templateColumns="repeat(10, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={10} bg="white">
              <Heading size="lg" ml={14}>
                <i>Giỏ Hàng</i>
              </Heading>
              <br />
              <hr />
              <br />
              <hr />
              <br />
              <hr></hr>
            </GridItem>
            <GridItem rowSpan={1} colSpan={10} bg="white">
              <Grid
                h="50px"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(8, 1fr)"
                gap={4}
              >
                <GridItem rowSpan={5} colSpan={2}>
                  <Center mb={20}><b>Sản phẩm</b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center><b>Số lượng </b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2}>
                  <Center><b>Thành tiền</b></Center>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                  <Center><b>Xóa</b></Center>
                </GridItem>
              </Grid>
              <hr></hr>
            </GridItem>
{""}
          </Grid>
        </Container>
      </Box>
     </Box>
  );
}