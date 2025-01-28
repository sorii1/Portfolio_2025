import {Box, Grid2} from "@mui/material";
import "./BannerHome.css";
import EmailIcon from "../../assets/envelope-line-icon.svg";
import PositionIcon from "../../assets/maps-pin-line-icon.svg";
import JobIcon from "../../assets/briefcase-line-icon.svg";
import LinkIcon from "../../assets/broken-link-icon.svg";
import MyselfImg from "../../assets/me.jpg";
import DownloadImg from "../../assets/import-icon.svg";
import HomeMenu from "../HomeMenu/HomeMenu";


export default function BannerHome() {

    const openH1 = "<h1>";
    const closeH1 = "</h1>";
    const openP = "<p>";
    const closeP = "</p>";

    return (

        <Grid2 container padding={"80px 80px 130px"} className={"homepage-banner"} flexWrap={"nowrap"} justifyContent={"space-between"}>
            <Grid2 borderLeft={"5px solid #FFD700"} borderTop={"5px solid #FFD700"} borderRadius={"105px 0 100px 0"}>
                <Grid2 alignItems={"center"} container gap={"32px"} flexDirection={"column"}
                       borderRadius={"100px 0 100px 0"} border={"3px solid #FFFFFF"} padding={"37px 47px 37px 24px"}>
                    <Grid2 container flexDirection={"column"} alignItems={"center"}>
                        <img className={"personal-image"} src={MyselfImg} alt="me"/>
                        <p className={"m-0 left-section-text-title title-text"}>Sorin</p>
                        <p className={"m-0 left-section-text"}>Front-End Web Developer</p>
                    </Grid2>
                    <Grid2 container flexDirection={"column"} alignItems={"left"} gap={"16px"}>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img width="20px" height="20px" src={EmailIcon} alt="Email"/>
                            <p className={"m-0 left-section-text"}>sorin.lavorohome@gmail.com</p>
                        </Grid2>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img width="20px" height="20px" src={PositionIcon} alt="Position"/>
                            <p className={"m-0 left-section-text"}>Romania</p>
                        </Grid2>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img width="20px" height="20px" src={JobIcon} alt="Job"/>
                            <p className={"m-0 left-section-text"}>Full-Time / Freelancer</p>
                        </Grid2>
                        <Grid2 container alignItems={"center"} gap={"8px"}>
                            <img width="20px" height="20px" src={LinkIcon} alt="Link"/>
                            <p className={"m-0 left-section-text"}>www.sorinmarianfica.com</p>
                        </Grid2>

                        <Grid2 container className={"exp-container"} gap={"8px"}>
                            <Box>
                                <button disabled>HTML</button>
                            </Box>
                            <Box>
                                <button disabled>CSS</button>
                            </Box>
                            <Box>
                                <button disabled>React.js</button>
                            </Box>
                            <Box>
                                <button disabled>JavaScript</button>
                            </Box>
                        </Grid2>
                    </Grid2>

                    <button className={"download-cv-button"}>Download CV <img width={"25px"} height={"25px"}
                                                                              src={DownloadImg} alt={"Download CV"}/>
                    </button>

                </Grid2>
            </Grid2>
            <Grid2 container className={"center-section"} flexWrap={"nowrap"} flexDirection={"column"}>
                <Grid2 container flexDirection={"column"} height={"fit-content"}>
                    <p className={"tag-text"}>{openH1}</p>
                    <p className={"center-section-title m-0"}> Hey </p>
                    <p className={"center-section-title m-0"}> I'm <span className={"y-color"}>Sorin</span>,</p>
                    <p className={"center-section-title m-0"}>Front-End Developer. </p>
                    <p className={"tag-text"}>{closeH1}</p>
                </Grid2>
                <Grid2 container flexDirection={"column"} height={"fit-content"}>
                    <p className={"tag-text"}>{openP}</p>
                    <p className={"center-section-description"}>I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
                    <p className={"tag-text"}>{closeP}</p>
                </Grid2>
                <a href={"#"}></a>
            </Grid2>

            <HomeMenu></HomeMenu>
        </Grid2>
    )
}