import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Mock auth: Check localStorage or simulate API
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) => u.username === values.username && u.password === values.password
      );
      if (user) {
        localStorage.setItem("ticketapp_session", "mock-token");
        navigate("/dashboard");
        toast.success("Login successful!");
      } else {
        toast.error("Invalid credentials");
      }
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <span>{formik.errors.username}</span>
          )}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
        </div>
        <button type="submit">Login</button>
      </form>
      <footer>Copyright © 2025</footer>
    </div>
  );
}
