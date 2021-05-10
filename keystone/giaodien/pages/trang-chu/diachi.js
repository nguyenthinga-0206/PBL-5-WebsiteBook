import { SearchIcon } from "@chakra-ui/icons";
import { Tooltip } from "@chakra-ui/react"
import { AspectRatio } from "@chakra-ui/react"
const DiaChi = () => {
    return <div>
        <Tooltip isDisabled>
            <SearchIcon />
        </Tooltip>
        <h3>chao các bna mđén với hayakubooks</h3>
        <div>
            <h2>
                địa chỉ </h2>    
                </div>
                <AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.839791917698!2d108.14772551480782!3d16.073801288878112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBLaG9hIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1618990341987!5m2!1svi!2s"
    alt="demo"
  />
</AspectRatio>

    </div>

}

export default DiaChi;
