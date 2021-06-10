import {
  Grid,
  GridItem,
  Input,
  Box,
  Container,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  Button,
  Center,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function UI({ handleChange, onCreate, resultCreateDonHang }) {
  const router = useRouter();
  return (
    <Grid
      h="800px"
      templateColumns="repeat(8, 1fr)"
      gap={4}
    >
      <GridItem colSpan={2} bg="white">
        <Center>
          <b>
            <i> THÔNG TIN NHẬN HÀNG</i>
          </b>
        </Center>

        <br />
        <Input name={'hoten'} placeholder="Họ Tên" size="md" onChange={handleChange("hoten")} />

        <br />
        <br />

        <Input name='sdt' placeholder="Số Điện Thoại" size="md" onChange={handleChange("sdt")} />

        <br />
        <br />
        <Input name='diachi' placeholder="Địa Chỉ " size="md" onChange={handleChange("diachi")} />

        <br />
        <br />
      </GridItem>
      <GridItem colSpan={6} bg="white">
        <Center>
          <b>
            <i>VẬN CHUYỂN</i>
          </b>
        </Center>
        <br></br>
        <Box borderWidth={2} bg={"white"}>
          <Container maxW={"container.xl"} py={3}>
            🚚 Đồng giá ship 30.000đ toàn quốc. Miễn Phí Vận Chuyển cho đơn hàng từ ₫300.000
                        <br />
                           Dự tính giao hàng trong 2-3 ngày.
                  </Container>
        </Box>
        <br />
        <b>
          <i>Hình thức thanh toán</i>
        </b>
        <br></br>
        <br></br>
        <Select name='tinhTrangThanhToan' placeholder="Cách thức giao hàng" onChange={handleChange("tinhTrangThanhToan")}>
          <option value='tienmat'>Thanh toán khi nhận hàng</option>
          <option value='the'>Thanh toán bằng ví điện tử</option>
        </Select> 
        <br />
        <br />
        <b>
          <i>Cách thức giao hàng</i>
        </b>
        <br></br>
        <br></br>
        <Select name='cachThucGiaoHang' placeholder="Cách thức giao hàng" onChange={handleChange("cachThucGiaoHang")}>
          <option value='giohanhchinh'>Chỉ giao hàng trong giờ hành chính</option>
          <option value='all'>Tất cả các ngày trong tuần</option>
        </Select>
      </GridItem>
      <GridItem colSpan={1} bg="white">
        <Box>
          <Button
            onClick={(e) => {
              router.push("/gio-hang");
            }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={50}
            color={"black"}
            bg={"white"}
            href={"#"}
            _hover={{
              bg: "gray.600",
            }}
          >
            Quay Lại Giỏ Hàng
          </Button>
        </Box>
        <GridItem colSpan={1} bg="white" ml={280}>
          <Box>
            <Button
              onClick={onCreate}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={50}
              color={"white"}
              bg={"orange.500"}
              href={"#"}
              _hover={{
                bg: "teal.600",
              }}
            >
              Đặt hàng
                  </Button>
          </Box>
        </GridItem>
      </GridItem>
    </Grid>
  )
}

