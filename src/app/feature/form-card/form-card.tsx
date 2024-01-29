"use client";

import styles from "./form-card.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/input/input";
import Link from "next/link";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#\$%^&*()_+{}":;<>,.?~\[\]]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

type Props = {};
export const FormCard = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      router.push("/dashboard");
    },
  });
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        placeholder="Email"
        name="email"
        type="email"
        autoComplete="email"
        required
        readOnly={isSubmitting}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <Input
        placeholder="Password"
        type={isVisible ? "text" : "password"}
        name="password"
        readOnly={isSubmitting}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        endIcon={
          <button
            className={styles.password_btn}
            onClick={() => setIsVisible(!isVisible)}
            type="button"
          >
            {isVisible ? "HIDE" : "SHOW"}
          </button>
        }
      />

      <div className="">
        <Link href="#">Forgot PASSWORD?</Link>
      </div>

      <button disabled={!isValid} className={styles.btn}>
        LOG IN
      </button>
    </form>
  );
};
