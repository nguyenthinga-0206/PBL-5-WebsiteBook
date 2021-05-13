import UI from './UI'
import {useQuery, gql} from '@apollo/client'
export default function DonHangList(){
    const {
        loading, error, data
    } = useQuery (gql `query{
        allDonhangs{
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
      }`)
    if(loading || error){
        return "Loading...";
    }

    return (
        <UI data = {data}/>
    )
}