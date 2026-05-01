export function validateEmail(email: string): string | null {
  if (!email) {
    return "Email обязателен";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(email)) {
    return "Неверный формат email";
  }

  return null;
}

export function validatePassword(password: string): string | null {
  if (!password || password.length === 0) {
    return "Введите пароль";
  }

  if (password.length < 6) {
    return "Минимум 6 символов";
  }

  if (password.length > 50) {
    return "Максимум 50 символов";
  }

  if (!/\d/.test(password)) {
    return "Пароль должен содержать хотя бы одну цифру";
  }

  // Наличие хотя бы одной буквы в верхнем регистре
  if (!/[A-Z]/.test(password)) {
    return "Пароль должен содержать хотя бы одну заглавную букву";
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Пароль должен содержать хотя бы один специальный символ";
  }

  if (/\s/.test(password)) {
    return "Пароль не должен содержать пробелов";
  }

  return null;
}