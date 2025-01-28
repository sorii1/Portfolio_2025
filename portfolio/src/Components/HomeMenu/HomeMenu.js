import {Grid2} from "@mui/material";
import MenuImg from "../../assets/four-squares-line-icon (1).svg";
import UserImg from "../../assets/reshot-icon-user-7ZXA3QERGV.svg";
import CodeImg from "../../assets/reshot-icon-code-RXCU7J2M4H.svg";
import ComputerImg from "../../assets/screen-icon.svg";
import EmailIcon from "../../assets/envelope-line-icon.svg";
import "./HomeMenu.css";


export default function HomeMenu() {

    return (
        <>
            <Grid2 container flexDirection={"column"}>
                <button className={"menu-button"}><img width={"30px"} height={"30px"} src={MenuImg} alt={"Home"}/></button>
                <button className={"menu-button"}><img width={"30px"} height={"30px"} src={UserImg} alt={"User Info"}/></button>
                <button className={"menu-button"}><img width={"30px"} height={"30px"} src={CodeImg} alt={"Skills"}/></button>
                <button className={"menu-button"}><img width={"30px"} height={"30px"} src={ComputerImg} alt={"Work experience"}/></button>
                <button className={"menu-button"}><img width={"30px"} height={"30px"} src={EmailIcon} alt={"Contact"}/></button>
            </Grid2>
        </>
    )
}