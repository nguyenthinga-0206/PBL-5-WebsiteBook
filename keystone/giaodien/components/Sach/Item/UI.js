import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useRouter } from "next/router";
import { Grid, GridItem } from "@chakra-ui/react";
import ChiTietDonHangCreate from "../../ChiTietDonHang/Create";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}

function UI({ sach }) {
  const router = useRouter();

  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "#F687B3")}
        maxW="full"
        borderColor="white"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        _hover={{
          bg: "green.50",
        }}
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="#22543D"
          />
        )}
        <Link
          onClick={(e) => {
            router.push({
              pathname: "/chi-tiet-sach/[id]",
              query: {
                id: sach.id,
              },
            });
          }}
        >
          <Image
            w={"250px"}
            h={"250px"}
            src={sach?.IMG[0]?.anh?.publicUrl}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
        </Link>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge
              rounded="full"
              px="2"
              text-overflow="ellipsis"
              fontSize="xx-small"
              colorScheme="green"
            >
              {sach.tenTacGia}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Link
              onClick={(e) => {
                router.push({
                  pathname: "/chi-tiet-sach/[id]",
                  query: {
                    id: sach.id,
                  },
                });
              }}
            >
              <Box
                fontSize="small"
                fontWeight="semibold"
                text-overflow="ellipsis"
                w="150px"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {sach.tenSach}
              </Box>
            </Link>
            <ChiTietDonHangCreate sachId={sach.id} soLuong={1} check={true} />
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box as="span" ml="2" color="#ECC94B">
              <Rating rating={data.rating} />
            </Box>
            <Box fontSize="2xl" color={useColorModeValue("#22543D", "white")}>
              <Box as="span" color={"#22543D"} fontSize="lg">
                ???
              </Box>
              {new Intl.NumberFormat().format(sach.gia)}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default UI;
