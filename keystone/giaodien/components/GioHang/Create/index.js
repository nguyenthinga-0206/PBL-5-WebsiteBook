import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import UI from "./UI";
import { refetchCartList } from "../List";
import HTML from "../../HTML";
export default function CartCreate() {
  const [onCreateCart, resultCreateCart] = useMutation(gql`
      mutation($data: GiohangCreateInput) {
        createGiohang(data: $data) {
          chiTietDonHang{
            soLuong
          }
          
        }
    }
  `);
  const [soLuong, setSoLuong] = useState(0);
  /**
   * @param {int} name
   */
   
  const handleIncrease = (name) => (event) => {
    setSoLuong({ ...soLuong, [name]: soLuong  + 1 });
    console.log(soLuong)
  };
  const handleDecrease = (name) => (event) => {
    setSoLuong({ ...soLuong, [name]: soLuong - 1 });
    
  };
  
  const onCreate = (e) => {
    onCreateCart({
      variables: {
        data: soLuong
      },
    })
      .then((data) => {
        refetchCartList()();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  
  
  if (resultCreateCart.loading) return "Loading...";
  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <div>{soLuong}</div>
      <hr/>
      <button onClick={handleDecrease}>-</button>
      <div>{soLuong}</div>
      <hr/>
      <button type="submit" onClick={onCreate}>Add to Cart</button>
      {resultCreateCart?.error && HTML.generation(resultCreateCart.error, 4)}
      {resultCreateCart?.data && HTML.generation(resultCreateCart.data, 4)}
    </div>
  );
}
