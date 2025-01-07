import {Box, Grid2} from "@mui/material";
import "./Navbar.css";
import WhatsappImg from "../../assets/whatsapp-icon.svg";
import LinkedinImg from "../../assets/linkedin-square-icon.svg";
import GithubImg from "../../assets/github-icon.svg";

export default function Navbar() {

    const logo = "<Logo />";

    return (
        <Box className="Navbar" padding={"64px 80px 24px"}>
            <Grid2 container borderBottom={"2px solid #FFFFFF"} justifyContent={"space-between"}>
                <Box>
                    <p className={"logo-portfolio title-text"}>{logo}</p>
                </Box>
                <Grid2 container>
                    <Grid2 container>
                        <img src={LinkedinImg} alt="Linkedin Logo"/>
                        <p>Linkedin</p>
                    </Grid2>
                    <Grid2 container>
                        <img src={GithubImg} alt="Github Logo" />
                        <p>Github</p>
                    </Grid2>
                    <Grid2 container>
                        <img src={WhatsappImg} alt="Whatsapp Logo"/>
                        <p>Whatsapp</p>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}