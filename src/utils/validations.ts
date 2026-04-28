export function validateEmail(email: string): string | null {
  if (!email) return "Email обязателен";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(email)) {
    return "Неверный формат email";
  }

  return null;
}

export function validatePassword(password: string): string | null {
  if (password.length < 6 || password.length > 100) return "Минимум 6 символов";
  return null;
}