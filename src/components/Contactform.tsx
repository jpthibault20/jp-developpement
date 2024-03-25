"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { X } from "lucide-react"



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


export function Contactform({ message = "", setIsOpen }: { message: string, setIsOpen: (load: boolean) => void }) {

  const [alertMessageSend, setalertMessageSend] = useState(false)

  const defaultMessage = "Message";
  const propsMessage = message || defaultMessage;


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
    if (message !== "Votre message") {
      setIsOpen(false);
    }

    setalertMessageSend(true);

  }

  return (
    <>
      {alertMessageSend && (
        <div role="alert" className="fixed top-4 right-4 z-50 alert alert-success w-64">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Message envoyé</span>
          <button>
            <X onClick={() => setalertMessageSend(false)}/>
          </button>
        </div>

      )}

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
                  <Textarea placeholder={message} {...field} className="bg-[#504f55] border border-none drop-shadow-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl">Submit</Button>
        </form>
      </Form>
    </>

  )
}

export default Contactform