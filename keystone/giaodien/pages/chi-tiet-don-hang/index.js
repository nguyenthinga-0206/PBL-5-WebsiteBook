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
  Container,
  SimpleGrid,
  Tag,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Grid,
  GridItem,
  useNumberInput,
  HStack,
  List,
  Center,
  Portal,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Circle, Image, Badge, chakra, Tooltip } from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  CheckCircleIcon,
  SmallCloseIcon,
} from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Divider } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ButtonGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import {
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
export default function TrangChu() {
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
            <GridItem rowSpan={2} colSpan={5} bg="white">
              <Heading size="lg" ml={14}>
                <i>Chi Tiết Đơn Hàng Của Bạn</i>
              </Heading>
              <br /> <br /> <br />
              <Box>
                <p>
                  <b> Khách Hàng A</b>
                </p>
              </Box>
              <br />
              <p>084737924</p>
              <br />
              <p>
                Kiệt 85 Nguyễn Lương Bằng , Hòa Khánh Bắc, Liên Chiểu , Đà Nẵng
              </p>
              <br />
              <br />
              <Box>
                <Button
                  onClick={(event) => {
                    router.push("/gio-hang");
                  }}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={50}
                  color={"black"}
                  bg={"white"}
                  href={"#"}
                  _hover={{
                    bg: "gray.500",
                  }}
                >
                  Quay Lại Đơn Hàng
                </Button>
              </Box>
            </GridItem>
            <GridItem rowSpan={2} colSpan={5} bg="white">
              <Stack direction="row" h="200px">
                <Divider orientation="vertical" ml={50} md={50} />
                <Text>
                  {" "}
                  <b>Sản Phẩm</b>
                  <br />
                  <br />
                  <p> - sp1</p>
                  <br />
                  <p> -sp2</p>
                  <p>-Vận Chuyển : 30,000d</p>
                  <p>Tổng số tiền : 0202220.3đ </p>
                </Text>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
