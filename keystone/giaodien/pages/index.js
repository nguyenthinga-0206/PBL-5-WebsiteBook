import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

import NhapsachList from '../components/Phieunhapsach/List';
import NhaCungCapList from '../components/Nhacungcap/List';
import UserList from '../components/User/List';
import SachList from '../components/Sach/List';
import PhanloaiList from '../components/Phanloaisach/List';

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
        {/* <div>----PHIEU NHAP SACH------</div>   
        <NhapsachList/>  
        <div>---USER-----</div>     
        <UserList/> */}
        {/* <div>---PHAN LOAI SACH ---</div>
        <PhanloaiList/> */}
        {/* <div>---SACH-----</div>
        <SachList/> */}
        <div>----NHA CUNG CAP-----</div>
        <NhaCungCapList/>
    </div>

}
