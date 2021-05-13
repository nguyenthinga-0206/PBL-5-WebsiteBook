import { Image } from "@chakra-ui/react";

export default function UI({image}){
    return<div>
       <Image src={image.publicUrl} alt="Segun Adebayo"/>
       {/* <img src={image.publicUrl} alt="Segun Adebayo"/> */}
        </div>

}