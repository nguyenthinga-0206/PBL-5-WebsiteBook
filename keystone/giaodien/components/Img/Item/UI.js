// export default function UI({ IMG }) {
//   return (
//     <div>
//       <img src={IMG.anh.publicUrl} alt="Image" />
//     </div>
//   );
// }

import { GridItem, Image } from "@chakra-ui/layout";


export default function UI({ IMG }) {
  return (
    <GridItem rowSpan={1} colSpan={1} bg="white">
      <Image
       src={IMG.anh.publicUrl}
        alt="Segun Adebayo"
        w="100%"
        h="100%"
      />
    </GridItem>
  );
}