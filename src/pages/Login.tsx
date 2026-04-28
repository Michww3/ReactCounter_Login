import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { validateEmail, validatePassword } from "../utils/validations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [touched, setTouched] = useState({
    email: false,
    password: false
  })

  const emailError = touched.email ? validateEmail(email) : null;
  const passwordError = touched.password ? validatePassword(password) : null;

  const isValid = !emailError && !passwordError;

  const handleSubmit = () => {
    setTouched({ email: true, password: true });

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);

    if (emailErr || passwordErr) return;

    console.log({ email, password });

    setEmail("");
    setPassword("");
    setTouched({ email: false, password: false });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box sx={{ p: 3 }} onKeyDown={handleKeyDown}>
      <Typography variant="h4">Войти</Typography>

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        error={!!emailError}
        helperText={emailError}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
      />

      <TextField
        label="Пароль"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        error={!!passwordError}
        helperText={passwordError}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setTouched(prev => ({ ...prev, password: true }))}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={!isValid}
      >
        Войти
      </Button>

      {/* live preview */}
      <Box sx={{ mt: 3 }}>
        <Typography>Email: {email}</Typography>
        <Typography>Password: {password}</Typography>
      </Box>
    </Box>
  );
}