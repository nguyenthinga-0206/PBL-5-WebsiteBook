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
    <Box bg={"gray.50"}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link
              onClick={(event) => {
                router.push("/trang-chu");
              }}
            >
              <Image
                borderRadius="full"
                boxSize={8}
                src="img/logo1.jpg"                alt="Segun Adebayo"
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>

          <Input ml={24} w={"50%"} placeholder="Tìm kiếm" />
          <Link
            onClick={(event) => {
              router.push("/gio-hang");
            }}
          >
            <Image
              ml={24}
              borderRadius="full"
              boxSize={8}
              src="img/giohang2.png"
              alt="Segun Adebayo"
            />
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={(event) => {
              router.push("/dang-nhap");
            }}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            href={"#"}
          >
            Đăng Nhập
          </Button>
          <Button
            onClick={(event) => {
              router.push("/dang-ky");
            }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.500"}
            href={"#"}
            _hover={{
              bg: "blue.900",
            }}
          >
            Đăng Ký
          </Button>
        </Stack>
      </Flex>
      <Container maxW={"container.xl"} py={8}>
        <Grid
          h="800px"
          templateRows="repeat(10, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={8} colSpan={5} bg="white">
            <Image src="img/sach1.jpg" alt="Segun Adebayo" w="100%" h="100%" />
          </GridItem>
          <GridItem rowSpan={10} colSpan={5} bg="white">
            <GridItem rowSpan={5} colSpan={5} bg="white">
              <Box ml={14}>
                <Heading as="h2" size="xl" md={14} ml={14}>
                  QUẢN LÝ SẾP OK THÔI
                </Heading>
                <br />
                <hr></hr>
                <br />
                <p>
                  <b>
                    <i>Mã sản phẩm:</i>
                  </b>{" "}
                  <i> 8936067604030</i>
                </p>
                <br />
                <p>Tác giả: Bruce Tulgan</p>
                <p>Dịch giả:Thành Bảo Ngọc</p>
                <p>NXB: NXB Thanh NiênF</p>
                <p>Kích thước: 24.5 x 20.5 cm</p>
                <p>Năm xuất bản: 2021</p>
                <p>
                  Số trang: 240
                  <br />
                  Khối lượng: 285 grams
                  <br />
                  Bìa : bìa mềm
                  <br />
                  <br />
                  <p>
                    <hr />
                    <br></br>
                  </p>
                </p>
              </Box>
            </GridItem>
            <GridItem rowSpan={5} colSpan={5} bg="white">
              <GridItem rowSpan={3} colSpan={5} bg="white">
                <GridItem rowSpan={2} colSpan={5} bg="white">
                  <Grid
                    h="200px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(2, 1fr)"
                    gap={4}
                  >
                    <GridItem rowSpan={1} bg="white">
                      <Box ml={14}>
                        <p>
                          <p>
                            <b>Giá:</b>{" "}
                            <Text fontSize="xl" ml={30} color={"green.600"}>
                              {" "}
                              567$
                            </Text>{" "}
                          </p>
                          <br />
                          <p>
                            <b>Trang thái: </b> Còn hàng
                          </p>
                        </p>
                        <br />
                        <b>Số lượng</b>
                        <br />
                        <br />
                        <HStack maxW="180px">
                          <Button {...inc}>+</Button>
                          <Input {...input} />
                          <Button {...dec}>-</Button>
                        </HStack>
                      </Box>
                    </GridItem>
                    <GridItem rowSpan={1} bg="white">
                      <Stack direction="row" h="200px">
                        <Divider orientation="vertical" ml={10} />
                        <Text>
                          {" "}
                          <b>Dịch vụ của chúng tôi</b>
                          <br />
                          <br />
                          <p>
                            {" "}
                            - Giao hàng tận nhà trong 3 - 7 ngày làm việc.{" "}
                          </p>
                          <br />
                          <p>
                            {" "}
                            - Miễn phí giao hàng Toàn Quốc cho đơn hàng trên
                            300k.
                          </p>
                        </Text>
                      </Stack>
                    </GridItem>
                  </Grid>
                </GridItem>
                <GridItem rowSpan={1} colSpan={5} bg="white">
                  <br />
                  <Box ml={14}>
                    <Button
                      colorScheme="teal"
                      variant="solid"
                      ml={300}
                      bg={"orange.500"}
                    >
                      THÊM VÀO GIỎ HÀNG
                    </Button>
                  </Box>
                </GridItem>
              </GridItem>
              <GridItem rowSpan={2} colSpan={5} bg="white">
                <Box ml={14}>
                  <br></br>
                  <b>Dịch vụ + Khuyến mãi</b>
                  <br />
                  <br />
                  <p>
                    {" "}
                    <Icon as={CheckCircleIcon} /> Tặng móc khoá cho đơn hàng
                    200k
                  </p>
                  <p>
                    {" "}
                    <Icon as={CheckCircleIcon} />
                    Tăng sổ tay + Freeship cho đơn hàng 300K.
                  </p>
                </Box>
              </GridItem>
            </GridItem>
          </GridItem>
          <GridItem rowSpan={2} colSpan={5} bg="white">
            <Grid
              h="120px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
            >
              <GridItem rowSpan={1} colSpan={1} bg="white">
                <Image
                  src="img/sach13.jpg"
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src="img/sach10.jpg"
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src="img/sach1.jpg"
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src="img/sach4.jpg"
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
              <GridItem rowSpan={1} colSpan={1} bg="blue">
                <Image
                  src="img/sach5.jpg"
                  alt="Segun Adebayo"
                  w="100%"
                  h="100%"
                />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
      <Container maxW={"container.xl"} py={1}>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(1, 1fr)"
          gap={4}
        ></Grid>
        <GridItem rowSpan={1} colSpan={1} bg="white">
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Mô Tả</Tab>
              <Tab>Bình Luận</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  <Heading as="h2" size="xl" md={14} ml={4}>
                    QUẢN LÍ SẾP OK THÔI - CUỐN SÁCH DÀNH CHO NHỮNG AI MUỐN TRỞ
                    THÀNH NHÂN VIÊN GIỎI
                  </Heading>
                  <br />
                  <i>
                    Để trở thành nhân viên giỏi chốn công sở ngày nay, bạn cần
                    phải tạo ra những mối quan hệ có tính gắn kết cao với từng
                    vị sếp, bất luận vị sếp đó tài năng, tồi tệ hay nằm đâu đó
                    giữa hai thái cực ấy.
                  </i>
                  <br />
                  <b>
                    “Quản lí lỏng lẻo” - giao tiếp giữa quản lí và nhân viên
                    thiếu hụt khiến bạn hoài nghi về khả năng làm việc của bản
                    thân mình.
                  </b>{" "}
                  <br />
                  <br />
                  <Center>
                    <Image
                      src="img/sach1.jpg"
                      alt="Segun Adebayo"
                      w="50%"
                      h="50%"
                    />
                  </Center>
                  <br />
                  <br />
                  <br />
                  Trong tư tưởng của bạn, đã bao giờ trong quá trình làm việc
                  bạn hoài nghi về bản thân. Điều gì đã xảy ra vậy? Có thể do
                  bạn đã bị mất đi sự liên kết và giao tiếp với người quản lí
                  của mình.
                  <br />
                  Ở khắp nghành nghề và mọi cấp độ tổ chức, có một dịch bệnh
                  đang lan tỏa sâu rộng khiến người ta sửng sốt được gọi là
                  “quản lí lỏng lẻo”. Nó trái ngược với quản lí chi tiết. Phần
                  lớn mối quan hệ mang tính giám sát giữa nhân viên và sếp thiếu
                  đi sự giao lưu cần thiết hằng ngày để duy trì vững chắc những
                  cơ sở của việc quản lí: mục tiêu rõ ràng; nguồn lực cần thiết;
                  theo dõi hiệu quả làm việc thực sự; ghi nhận và tưởng thưởng
                  công bằng. Thực tế là, người quản lí trực tiếp của mình; rằng
                  giao tiếp hai chiều là vô cùng thiếu hụt; và rằng nhân viên
                  khiếm khi nhận được những hướng dẫn hằng ngày, nguồn lực, phản
                  hồi và phần thưởng mà họ cần.
                  <br />
                  Khi những cố gắng và cống hiến của nhân viên dành cho công ty
                  không được công nhận một cách xứng đáng và đúng lúc thì năng
                  suất cũng như hiệu quả sẽ không thể duy trì được chỉ vì đam
                  mê.
                  <br /> <br />
                  <b>
                    Khi Sếp quản lí lỏng lẻo, bạn là người phải trả giá{" "}
                  </b>{" "}
                  <br /> <br />
                  Bạn phụ thuộc vào cấp trên trực tiếp của mình hơn bất kì cá
                  nhân nào khác trong việc đáp ứng của bản thân tại công sở,
                  cũng như trong việc đối phó với bất kì vấn đề nào nảy sinh
                  trong công việc. Sếp của bạn là điểm tiếp xúc của bạn. Nhưng
                  còn hơn thế rất nhiều, mỗi ngày, sếp của bạn sẽ định hình trải
                  nghiệm làm việc của bạn. Để trở thành một nhân viên luôn có
                  hiệu quả làm việc cao, bạn cần những vị sếp cho bạn biết rằng
                  mình quan trọng, công việc mình đang làm là quan trọng. Bạn
                  cần nhữn vị sếp nêu rõ những kì vọng; người dạy bạn phương
                  thức làm việc hiệu quả nhất; người cảnh bsao bạn về những cạm
                  bẫy; người giúp bạn giải quyết những vấn đề nhỏ nhặt trước khi
                  chúng mưng mủ và phát triển; và người sẽ tưởng thưởng khi bạn
                  nỗ lực vượt ngoài kì vọng. Bạn muốn bạn giành được những gì
                  bạn cần và muốn từ công việc, từng bước trên con đường bạn đi.
                  <br />
                  Khả năng quản lí những mối quan hệ này của bạn sẽ có tác động
                  lớn nhất tới hiệu quả làm việc, thành tích, tinh thần và khả
                  năng giành được sự ghi nhận cũng như phần thưởng cho những
                  đóng góp của bạn. Bạn cần những vị sếp mạnh mẽ, và bạn sẽ phải
                  giúp họ trở thành người như vậy. Điều đó có nghĩa là bạn phải
                  nắm quyền kiểm soát và bắt đầu quản lí sếp của mình. Bạn cần
                  phải chịu trách nhiệm cho vai trò và cách ứng xử của mình
                  trong từng mối quan hệ mang tính quản lí với mỗi vị sếp của
                  mình.
                  <br />
                  Sếp chính là chìa khóa giúp bạn có được những gì bạn cần để
                  sống sót và thành công trong công việc, vậy nên bạn cần một
                  chiến lược để quản lí sếp của mình, cũng như những chiến thuật
                  thiết thực, có hiệu quả trong một thế giới đầy ắp những mối
                  quan hệ thẩm quyền phức tạp, thường xuyên dịch chuyển.
                  <br /> <br />
                  <b>4 điều cơ bản bạn phải “lấy”được từ sếp </b> <br /> <br />
                  1, Những kì vọng rõ ràng và phù hợp, bao gồm những hướng dẫn
                  rành mạch và thời gian biểu cụ thể.
                  <br />
                  2,Những kĩ năng, công cụ và nguồn lực cần thiết để bạn đáp ứng
                  những kì vọng đó, nếu không thì phải công nhận rằng bạn đã
                  được yêu cầu đạt những kì vọng đó mà trong tay không có những
                  điều kể trên.
                  <br />
                  3, Phản hồi chính xác và chân thực về hiệu quả àm việc của
                  bạn, cũng như việc định hướng để điều chỉnh lại hướng đi khi
                  cần thiết.
                  <br />
                  4, Một sự trao đổi công bằng - sự ghi nhận và phần thưởng để
                  đổi lấy hiệu quả làm việc của bạn.
                  <br /> <br />
                  <b>7 bước căn bản để “quản lí sếp” </b>
                  <br /> <br />
                  Bước 1: Người đầu tiên bạn cần quản lí mỗi ngày là chính bản
                  thân mình.
                  <br />
                  Bước 2: Tập thói quen quan rlis sếp của bạn mỗi ngày.
                  <br />
                  Bước 3: Quản lí mỗi vị sếp một lần, dần dần từng bước.
                  <br />
                  Bước 4: Hiểu rõ điều người khác kì vọng ở mình.
                  <br />
                  Bước 5: Đánh giá và lập kế hoạch cho những nguồn lực bạn cần.
                  <br />
                  Bước 6: Theo dõi hiệu quả làm việc của bạn bằng văn bản trên
                  từng bước.
                  <br />
                  Bước 7: Để giành được sự công nhận và phần thưởng lớn hơn, hãy
                  nỗ lực vượt bậc.
                  <br />
                  <br />
                  <i>
                    Hãy dành cho mình một quỹ thời gian để đọc 10 chương của
                    “Quản lí Sếp Ok thôi!”, những kiến thức bạn thu được chắc
                    chắn sẽ không khiến bạn hối hận đâu. Trở thành nhân viên
                    giỏi không còn là điều quá xa vời.
                  </i>
                </p>
              </TabPanel>
              <TabPanel>
                <Textarea placeholder="Thích thì bình luận  ---- Không thích thì cũng bình luận" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </GridItem>
      </Container>

      <Box bg={"gray.500"} color={"white"}>
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>HAYAKU BOOKS</b>{" "}
              </h1>
              <p>--------------------</p>
              <br />
              <Link
                href={
                  "https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+B%C3%A1ch+Khoa+-+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+%C4%90%C3%A0+N%E1%BA%B5ng/@16.073801,108.149914,14z/data=!4m5!3m4!1s0x0:0x714561e9f3a7292c!8m2!3d16.0738013!4d108.1499142?hl=vi"
                }
              >
                {" "}
                <p>
                  <b>Địa chỉ:</b> 54 Nguyễn Lương Bằng,Liên Chiểu, TP. Đà Nẵng
                </p>
              </Link>

              <p>
                <b>Email: </b> quynhnhuctcn@gmail.com{" "}
              </p>
              <br />
              <p>
                <b>Số điện thoại: </b> 0987654321
              </p>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>Hỗ Trợ Khách Hàng</b>
              </h1>
              <p>--------------------</p>
              <br />

              <Link
                onClick={(event) => {
                  router.push("/dieu-khoan-su-dung");
                }}
                href={"#"}
              >
                Điều khoản sử dùng
              </Link>
              <Link
                onClick={(event) => {
                  router.push("/huong-dan-mua-hang");
                }}
                href={"#"}
              >
                Hướng dẫn mua hàng
              </Link>
              <Link href={"#"}>Phương thức thanh toán</Link>
              <Link href={"#"}>Phương thức giao hàng</Link>
              <Link href={"#"}>Chính sách đổi trả</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <h1>
                <b>Thông Tin</b>
              </h1>
              <p>--------------------</p>
              <br />
              <Link href={"#"}>Đăng nhập</Link>
              <Link href={"#"}>Đăng ký</Link>
              <Link href={"#"}>Tra cứu đơn hàng</Link>
              <Link href={"#"}>Giới thiệu HAYAKU BOOKS</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <h1>
                <b>Mạng Xã Hội</b>
              </h1>
              <p>--------------------</p>
              <br />
              <Link
                href={"https://www.facebook.com/profile.php?id=100043475742371"}
              >
                Facebook
              </Link>
              <Link href={"#"}>Zalo</Link>
              <Link
                href={
                  "https://www.instagram.com/quynhu.ic/?fbclid=IwAR35MtSnfx45sphHkT1dd5saMUN1Ppo_hIog46X2Ek-yBOeCwHp4J9eQC2M"
                }
              >
                Instagram
              </Link>
              <Link href={"#"}>Website : HAYAKUBOOKS.vn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box py={10} bg={"gray.500"} color={"white"}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            borderRadius="full"
            boxSize={24}
            src="img/logo1.jpg"
            alt="Segun Adebayo"
          />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2021 HAYAKUBOOKS - Thế Giới Sách !
        </Text>
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.600", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const NAV_ITEMS = [
  {
    label: "Danh Mục Sách",
    children: [
      {
        label: "Sách Kĩ Năng",
        href: "#",
      },
      {
        label: "Sách Kinh Doanh",
        href: "#",
      },
      {
        label: "Sách Kinh Doanh2",
        href: "#",
      },
      {
        label: "Sách Kinh Doan3",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
];
const ListHeader = () => {
  return <Text fontWeight={"500"} fontSize={"lg"} mb={2}></Text>;
};
