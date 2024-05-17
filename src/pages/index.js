import AdminPanel from "@/components/admin/AdminPanel";
import Form from "@/components/admin/Form";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function index() {
  const [isPassword, setIsPassword] = useState(!true);

  return (
    <Box fontFamily={"monospace"} w={"100%"}>
      {!isPassword && <Form handleOpen={() => setIsPassword(true)} />}
      {isPassword && <AdminPanel />}
    </Box>
  );
}
