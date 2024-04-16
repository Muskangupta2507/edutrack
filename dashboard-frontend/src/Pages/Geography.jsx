import { Box, useTheme } from "@mui/material";
import { useGetUserQuery } from '../state/api';
// import Navbar from "../Components/Navbar";
// import { ResponsiveChoropleth } from "@nivo/geo";
// import { geoData } from "state/geoData";

const Geography = () =>{
    const theme = useTheme();
    const { data } = useGetUserQuery();

    return <Box m="1.5rem 2.5rem">
        {/* <Navbar/> */}
        <Box
            mt="40px"
            height="75vh"
            border={`1px solid ${theme.palette.secondary[200]}`}
            borderRadius="4px"
            >
                {data ? "": <>Loading...</>}
            </Box>
    </Box>;
};

export default Geography;