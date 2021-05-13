import ImgItem from '../Item'

export default function UI({data}){
    const {allIMGS}=data;
    return (
        allIMGS.map(image => {
            return <ImgItem image = {image}/>                          
        })
    
    )
}