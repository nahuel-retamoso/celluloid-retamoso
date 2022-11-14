import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'

export default function Form({setBuyer}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => setBuyer(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("FirstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("LastName", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("MobileNumber", {required: true, minLength: 6, maxLength: 12})} />
      <input type="submit"/>
    </form>
  );
}