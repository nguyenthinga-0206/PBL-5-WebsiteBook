import UI from './UI'
import {useQuery, gql, makeVar} from '@apollo/client'
export const refetchDonHangList = makeVar();
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
            chiTietDonHang{
              id
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
    if (refetch) refetchDonHangList(refetch);
    return (
        <UI data = {data}/>
    )
}