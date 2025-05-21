export const formatPrice = (price: number, postfix = '₽'): string => {
  // На всякий случай обрабатываем NaN / Infinity
  if (!Number.isFinite(price)) return `0 ${postfix}`;

  // Сохраняем знак, работаем с модулем числа
  const sign = price < 0 ? '-' : '';
  const absValue = Math.abs(price);

  // Разделяем целую и дробную части
  const [intRaw, fracRaw] = absValue.toString().split('.');

  // Форматируем целую часть: пробел каждые 3 цифры слева направо
  const intFormatted = intRaw.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  // Если есть дробная часть — добавляем её через запятую
  return sign + intFormatted + (fracRaw ? `,${fracRaw} ` : ' ') + postfix;
};
