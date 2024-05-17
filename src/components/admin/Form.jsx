import { Box, Button, Heading, Icon, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function adminForm({ handleOpen }) {
  const [inputValue, setInputValue] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  // login to the dashboard
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const data = { name: inputValue.name, password: inputValue.password };

    await axios
      .post("/api/admin", data)
      .then((response) => {
        console.log(response.data);
        handleOpen();
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  };

  // get inputs value
  const onLoginChange = (e) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          margin: "200px auto",
          border: "1px solid #AE9D9A",
          borderRadius: "5px",
          padding: "10px",
          height: "250px",
          justifyContent: "space-between",
        }}
        onSubmit={onSubmit}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
          <Icon as={FaRegUserCircle} m={"0 auto"} fontSize={"40px"} />
          <Heading
            textAlign={"center"}
            fontFamily={"fantasy"}
            fontSize={"20px"}
            fontWeight={700}
          >
            Admin
          </Heading>
          <Input
            name="name"
            _hover={{ bg: "gray.100" }}
            onChange={(e) => onLoginChange(e)}
            type="text"
            placeholder="write your name"
          />
          <Input
            name="password"
            _hover={{ bg: "gray.100" }}
            onChange={(e) => onLoginChange(e)}
            type="password"
            placeholder="write your password"
          />
        </Box>
        <Text color={"red"}>{error}</Text>
        <Button type="submit" colorScheme={"facebook"} isLoading={loading}>
          go to panel
        </Button>
      </form>
    </div>
  );
}
