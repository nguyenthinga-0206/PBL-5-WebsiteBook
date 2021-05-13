import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";
import BaiVietList from '../components/BaiViet/List'
import ChiTietDonHangList from '../components/ChiTietDonHang/List'
import DonHangList from '../components/DonHang/List'
import ImgList from '../components/Img/List'

export default function Home() {
    const router = useRouter()

    return <div><h3>Trang chủ </h3>
        <button onClick={event => {
            router.push('/gioi-thieu')
        }}>sang gioi thieu
        </button>
        <button onClick={event => {
            router.push('/sach/[id]',`/sach/${'nguyen nhat anh'}`)
        }}>sang trang sach</button>
        <ImgList/>       
        
    </div>

}
