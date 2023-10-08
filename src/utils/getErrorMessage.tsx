import axios from "axios";

export const unknownErrorText = "Произошла какая-то ошибка. Сообщите администратору системы";

export const getErrorMessage = (error?: unknown) => {
  if (error) {
    if (axios.isAxiosError(error)) {
      try {
        return error.response?.data.details.join(". ");
      } catch {
        return unknownErrorText;
      }
    }

    return unknownErrorText;
  }
};
