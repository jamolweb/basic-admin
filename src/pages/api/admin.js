const adminName = process.env.NEXT_PUBLIC_ADMIN;
const adminPassword = process.env.NEXT_PUBLIC_PASSWORD;

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, password } = req.body;
      if (!name || !password) {
        return res
          .status(403)
          .json({ success: false, message: "Invalid username or password" });
      }
      if (name !== adminName || password !== adminPassword) {
        return res
          .status(403)
          .json({ success: false, message: "Incorrect username or password" });
      }

      return res
        .status(200)
        .json({ success: true, message: "Logged in successfully" });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
