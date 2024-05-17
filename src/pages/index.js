"use client";
import AdminPanel from "@/components/admin/AdminPanel";
import Form from "@/components/admin/Form";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

// Renamed index to Index to comply with React component naming conventions
export default function Index() {
  const [isPassword, setIsPassword] = useState(false);

  return (
    <Box fontFamily={"monospace"} w={"100%"}>
      {!isPassword && <Form handleOpen={() => setIsPassword(true)} />}
      {isPassword && <AdminPanel />}
    </Box>
  );
}
