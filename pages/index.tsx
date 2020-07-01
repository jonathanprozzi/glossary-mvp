import { Flex, Box } from "@chakra-ui/core";
import GlossaryView from "../components/GlossaryView";

const IndexPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" gridArea="main">
      <Box maxWidth="960px" margin="0 auto" paddingX={4} paddingY={4}>
        <GlossaryView />
      </Box>
    </Flex>
  );
};

export default IndexPage;
