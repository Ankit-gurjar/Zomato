import { Box, Button, Container } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React from "react";
import MyImages from "../components/mis/images";
import { useState } from "react";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from "react-router";
import axios from "axios";
import { ImageState } from "../components/Context/imageProvider";

const Imagepage = () => {
  const toast = useToast();
  const history = useNavigate();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "InstaExplorer");
      data.append("cloud_name", "dimzqds7e");
      fetch("https://api.cloudinary.com/v1_1/dimzqds7e/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  const submitHandler = async () => {
    setPicLoading(true);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/v1/images",
        {
          pic,
        },
        config
      );
      console.log(data);
      toast({
        title: "Image uploded",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      // history.push("/images");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ImageState();

  return (
    <Container maxW="2xl">
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <FormControl id="pic" style={{ marginTop: 8 }}>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 8 }}
          onClick={submitHandler}
          isLoading={picLoading}
        >
          Upload Image
        </Button>
      </Box>

      {/* {user && <MyImages fetchAgain={fetchAgain} />} */}
    </Container>
  );
};

export default Imagepage;
