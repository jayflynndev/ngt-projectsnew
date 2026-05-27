"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";

interface ContactFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-8 shadow-sm">
      <p className="mb-6 text-lg font-semibold text-slate-900">
        Send a message
      </p>
      {submitted ? (
        <div className="rounded-3xl border border-brand-accent/20 bg-brand-accent/10 p-6 text-brand-primary">
          <p className="font-semibold">Thank you!</p>
          <p className="mt-2">
            Your message has been received. We will contact you shortly.
          </p>
        </div>
      ) : null}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            {...register("name", { required: true })}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          />
          {errors.name ? (
            <span className="text-sm text-red-600">Name is required.</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Company
          <input
            {...register("company")}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Phone
          <input
            {...register("phone", { required: true })}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          />
          {errors.phone ? (
            <span className="text-sm text-red-600">Phone is required.</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            {...register("email", { required: true })}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          />
          {errors.email ? (
            <span className="text-sm text-red-600">Email is required.</span>
          ) : null}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            {...register("message", { required: true })}
            rows={5}
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20"
          />
          {errors.message ? (
            <span className="text-sm text-red-600">Message is required.</span>
          ) : null}
        </label>
        <Button type="submit" variant="primary">
          Submit enquiry
        </Button>
      </form>
    </div>
  );
}
