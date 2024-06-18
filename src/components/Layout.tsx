import { Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout(props) {
  return (
    <div>
      <Flex>
        <Sidebar />

        <div>
          {props.children}
          <Footer />
        </div>
      </Flex>
    </div>
  );
}

export default Layout;
