import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";
import { refetchCartList } from "../List";
export default function CartCreate() {
  const [onCreateCart, resultCreateCart] = useMutation(gql`
      mutation($data: GiohangCreateInput) {
        createGiohang(data: $data) {
          chiTietDonHang{
            soLuong
            tien
          }
          
        }
    }
  `);
  const [cartItems, setCartItems] = useState(
    {
      soLuong:0,
      tien: 0.0
    }
  );
  /**
   * @param {int} name
   */
  const handleClick = (name) =>  (event) => {
    setCartItems({ ...cartItems, [name]: cartItems.soLuong + 1 });
  };
  const onCreate = (e) => {
    onCreateCart({
      variables: {
        data: cartItems,
      },
    })
      .then((data) => {
        refetchCartList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // const onCreate = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   console.log({exist});
  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, soLuong: exist.soLuong + 1 } : x
  //       )
  //     );
  //     console.log(exist.soLuong);
     
  //   } else {
  //     setCartItems([...cartItems, { ...product, soLuong: 1 }]);
      
  //   }
  // };
  
  if (resultCreateCart.loading) return "Loading...";
  return (
    <UI
      cartItems={cartItems}
      onCreate={onCreate}
      resultCreateCart={resultCreateCart}
    />
  );
}
