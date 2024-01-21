import { object, string, ref } from "yup";

export const signUpSchema = object().shape({
  email: string().required("Indica tu mail").email("Introduce un mail válido"),
  password: string()
    .required("Indica tu contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas no coinciden")
    .required(),
});
