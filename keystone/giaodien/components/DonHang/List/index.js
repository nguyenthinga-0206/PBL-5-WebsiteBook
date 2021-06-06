
import {useQuery, gql} from '@apollo/client'
export default function DonHangList({UI, first, skip = 0, sortBy, where }){
    const {
        loading, error, data
    } = useQuery (gql `
    query (
        $first: Int
        $skip: Int
        $sortBy: [SortDonhangsBy!]
        $where: DonhangWhereInput
        ) {
          allDonhangs (
            first: $first
            skip: $skip
            sortBy: $sortBy
            where: $where
          ) {
            id
            hoten
            sdt
            diachi
            tongtien
            tinhTrangThanhToan
            tinhTrangGiao
            duyetBoiTaiKhoan
            cachThucGiaoHang
            ngayDat
            ngayGiao
            chiTietDonHang {
              soLuong
              tien
            }
          }
        }    
      `,
      { variables: { first, skip, sortBy, where } }
      )
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}