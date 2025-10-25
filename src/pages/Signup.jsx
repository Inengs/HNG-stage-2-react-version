// Similar to Login.jsx, but save to localStorage
onSubmit: (values) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  users.push(values);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("ticketapp_session", "mock-token");
  navigate("/dashboard");
  toast.success("Signup successful!");
};
