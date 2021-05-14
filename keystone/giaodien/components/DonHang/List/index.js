import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function DonHangList({ first, skip = 0, sortBy, where }){
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
            sdt
            tongtien
            tinhTrangThanhToan
            tinhTrangGiao
            duyetBoiTaiKhoan
            cachThucGiaoHang
            ngayDat
            ngayGiao
            soLuong
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