import {route} from "next/dist/next-server/server/router";
import {useRouter} from "next/router";

const sach = () => {
    const  router =  useRouter()
    const {query : {id}} = router;
    return <h1>Sach : {id}</h1> ;
};
export default sach;