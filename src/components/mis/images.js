import { AddIcon } from "@chakra-ui/icons";
import { Box, Stack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useEffect, useState } from "react";
// import { getSender } from "../config/ChatLogics";
// import ChatLoading from "./ChatLoading";
// import GroupChatModal from "./miscellaneous/GroupChatModal";
import { Button } from "@chakra-ui/react";
import { ImageState } from "../Context/imageProvider";

const MyImages = ({ fetchAgain }) => {
  const [loggedUser, setLoggedUser] = useState();

  const { user, images, setImages } = ImageState();

  const toast = useToast();

  const fetchImages = async () => {
    console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/v1/images", config);
      setImages(data);
    } catch (error) {
      console.log(error.message);
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Images",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchImages();
    // eslint-disable-next-line
  }, [fetchAgain]);

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        display="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Images
      </Box>
      <Box
        display="flex"
        flexDir="column"
        p={3}
        bg="#F8F8F8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {/* {chats ? ( */}
        <Stack overflowY="scroll">
          {/* {chats.map((chat) => ( */}
          <Box
            //   onClick={() => setSelectedChat(chat)}
            cursor="pointer"
            //   bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
            //   color={selectedChat === chat ? "white" : "black"}
            px={3}
            py={2}
            borderRadius="lg"
            //   key={chat._id}
          ></Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyImages;
