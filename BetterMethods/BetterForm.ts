/*

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userUpdateSchema, UserUpdateType } from "./zod-schema";

export default function UpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateType>({
    resolver: zodResolver(userUpdateSchema),
  });

  const onSubmit = async (data: UserUpdateType) => {
    try {
      // Api hit

      console.log("Form Data:", data);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Update</button>
    </form>
  );
}

*/
