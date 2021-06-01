
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

  import {
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
  } from "@chakra-ui/react";
export default function UI({ gioHang }){
  // console.log( gioHang?.chiTietDonHang?.soLuong);
  //   return(
      
  //     <GridItem rowSpan={1} colSpan={10} bg="white">
  //     <Grid
  //       h="50px"
  //       templateRows="repeat(1, 1fr)"
  //       templateColumns="repeat(10, 1fr)"
  //       gap={4}
  //     >
  //       <GridItem rowSpan={1} colSpan={1}>
  //         <Center mb={20}>
  //           Ảnh:
  //           <Image src={gioHang?.chiTietDonHang?.sach?.IMG[0]?.anh?.publicUrl} width="53" height="50"></Image>
  //         </Center>
  //       </GridItem>

  //       <GridItem rowSpan={1} colSpan={2}>
  //         <Center mb={20}></Center>
  //       </GridItem>
  //       <GridItem rowSpan={1} colSpan={2}>
  //         <Center>{gioHang?.chiTietDonHang}</Center>
  //       </GridItem>
  //       <GridItem rowSpan={1} colSpan={2}>
  //         <Center>{gioHang?.chiTietDonHang?.soLuong}</Center>
  //       </GridItem>
  //       <GridItem rowSpan={1} colSpan={2}>
  //         <Center></Center>
  //       </GridItem>
  //       <GridItem rowSpan={1} colSpan={1}>
  //         <Center>
  //           <Button bg={"white"}>
  //             <Popover>
  //               <PopoverTrigger>
  //                 <Button>
  //                   {" "}
  //                   <Icon as={SmallCloseIcon}></Icon>
  //                 </Button>
  //               </PopoverTrigger>
  //               <Portal>
  //                 <PopoverContent>
  //                   <PopoverArrow />
  //                   <PopoverHeader>
  //                     Bạn có chắc chắn muốn xóa Sản Phẩm không?
  //                   </PopoverHeader>
  //                   <PopoverCloseButton />
  //                   <PopoverFooter>
  //                     <Button bg="gray.500" color="black">
  //                       No
  //                     </Button>
  //                   </PopoverFooter>

  //                   <PopoverBody>
  //                     <Button bg="gray.500" color="black" onClick={() => setCart([])}>
  //                       Yes
  //                     </Button>
  //                   </PopoverBody>
  //                 </PopoverContent>
  //               </Portal>
  //             </Popover>
  //           </Button>
  //         </Center>
  //       </GridItem>
  //     </Grid>
  //     <hr></hr>
  //   </GridItem>
 
    

   
// );
  console.log(gioHang?.chiTietDonHang?.sach?.tenSach);
   
    return<div>
    {/* <p>id: {gioHang?.id} </p> */}
    <p>abc</p>
    </div>
}