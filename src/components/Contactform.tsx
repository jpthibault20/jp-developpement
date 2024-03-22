"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"




const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  Surname: z.string().min(2, {
    message: "Surname must be at least 2 characters.",
  }),
  Phone: z.string().length(10, {
    message: "Phone number must be 10 digits.",
  }).trim(),
  Email: z.string().email({
    message: "Invalid email format."
  }),
  Message: z.string().max(2500, {
    message: "Message cannot exceed 2500 characters."
  }),
})

export function Contactform() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Surname: "",
      Phone: "",
      Email: "",
      Message: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 text-[#c7d2fe]">

        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nom" {...field} className=" bg-[#504f55] border border-none drop-shadow-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Surname"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Prenom" {...field} className="bg-[#504f55] border border-none drop-shadow-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Telephone" {...field} className="bg-[#504f55] border border-none drop-shadow-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Mail" {...field} className="bg-[#504f55] border border-none drop-shadow-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Message (max 2500 charactère)" {...field} className="bg-[#504f55] border border-none drop-shadow-xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl">Submit</Button>
      </form>
    </Form>
  )
}

export default Contactform