import {Box, Grid2} from "@mui/material";
import "./Navbar.css";
import WhatsappImg from "../../assets/whatsapp-icon.svg";
import LinkedinImg from "../../assets/linkedin-square-icon.svg";
import GithubImg from "../../assets/github-icon.svg";

export default function Navbar() {

    const logo = "<Sorin Marian Fică />";

    return (
        <Box className="Navbar" padding={"64px 80px 24px"}>
            <Grid2 container borderBottom={"2px solid #FFFFFF"} justifyContent={"space-between"}>
                <Box>
                    <p className={"logo-portfolio title-text"}>{logo}</p>
                </Box>
                <Grid2 container gap={"16px"} alignItems={"center"}>
                    <a href={"www.google.it"}>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img src={LinkedinImg} alt="Linkedin Logo"/>
                            <p className={"m-0 navbar-link title-text"}>Linkedin</p>
                        </Grid2>
                        </a>
                    <a href={"#"}>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img src={GithubImg} alt="Github Logo" />
                            <p className={"m-0 navbar-link title-text"}>Github</p>
                        </Grid2>
                    </a>
                    <a href={"#"}>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img src={WhatsappImg} alt="Whatsapp Logo"/>
                            <p className={"m-0 navbar-link title-text"}>Whatsapp</p>
                        </Grid2>
                    </a>
                </Grid2>
            </Grid2>
        </Box>
    )
}