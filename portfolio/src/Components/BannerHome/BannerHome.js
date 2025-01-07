import {Box, Grid2} from "@mui/material";
import "./BannerHome.css";

export default function BannerHome() {
    return (
        <Grid2 container padding={"80px 80px 130px"} className={"homepage-banner"}>
            <Grid2 alignItems={"center"} container flexDirection={"column"} borderRadius={"100px 0 100px 0"} border={"3px solid #FFFFFF"} padding={"37px 47px 37px 24px"}>
                <img className={"personal-image"} src={""} alt={""}/>
                <p className={"m-0"}>Sorin</p>
                <p className={"m-0"}>Web Developer</p>
                <Grid2 container gap={"8px"}>
                    <img />
                    <p className={"m-0"}>email</p>
                </Grid2>
                <Grid2 container gap={"8px"}>
                    <img />
                    <p className={"m-0"}>Romania</p>
                </Grid2>
                <Grid2 container gap={"8px"}>
                    <img />
                    <p className={"m-0"}>Job</p>
                </Grid2>
                <Grid2 container gap={"8px"}>
                    <img />
                    <p className={"m-0"}>Phone</p>
                </Grid2>
                <Grid2 container gap={"8px"}>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                    <Box>

                    </Box>
                </Grid2>
            </Grid2>
            <Grid2 container>

            </Grid2>
            <Grid2 container>

            </Grid2>
        </Grid2>
    )
}