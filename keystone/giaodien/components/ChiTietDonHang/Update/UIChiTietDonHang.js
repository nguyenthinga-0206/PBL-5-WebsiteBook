import {
  Box,
  Grid,
  GridItem,
  Center,
  Input,
  Button,
  Image,
  useNumberInput,
  HStack,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import ChiTietDonHangDelete from "../Delete";
import ChiTietDonHangUpdate from ".";
import ChiTietDonHangUpdateUI from "./UI";
import DonHangCreate from "../../DonHang/Create";

export default function UIChiTietDonHang({ chiTietDonHang, handleChange, onUpdate, check }) {
  const router = useRouter();

  // Thay đôi so luong mua hang
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: chiTietDonHang.soLuong,
    min: 1,
    max: chiTietDonHang.sach?.soLuong,
    precision: 2,
  });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <Fragment>
      <hr />
      <br />
      <Grid
        h="130px"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Center mb={20}>
            <Image
              src={chiTietDonHang.sach?.IMG[0]?.anh?.publicUrl}
              alt="Segun Adebayo"
              boxSize="120px"
            />
          </Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Center mb={20}>{chiTietDonHang.sach?.tenSach}</Center>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1}>
          <Center mb={20}>{new Intl.NumberFormat().format(chiTietDonHang.sach?.gia)}đ</Center>
        </GridItem>
        {check ? 
        <Fragment>
          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              <ChiTietDonHangUpdate UI={ChiTietDonHangUpdateUI} chiTietDonHang={chiTietDonHang} />
            </Center>
          </GridItem>      
          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              {new Intl.NumberFormat().format(chiTietDonHang.tien)}đ
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              <ChiTietDonHangDelete ChiTietID={chiTietDonHang.id} />
            </Center>
          </GridItem>
        </Fragment>
          : 
        <Fragment>
          <GridItem rowSpan={1} colSpan={1}>
            <Center>
              {chiTietDonHang.soLuong}
            </Center>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2}>
            <Center>
              {new Intl.NumberFormat().format(chiTietDonHang.tien)}đ
            </Center>
          </GridItem>
        </Fragment>
        }
      </Grid>
      <hr />
    </Fragment>
  );
}
