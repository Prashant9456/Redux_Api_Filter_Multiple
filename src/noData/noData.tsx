import { Box } from "@mui/system";
import noData from "./noData.svg";
const NoData = () => {
  return (
    <>
      <Box >
        <Box
          component="img"
          src={noData}
          height="60vh"
          width="auto"
          overflow="auto"
        />
        
      </Box>
      
    </>
  );
};

export default NoData;
