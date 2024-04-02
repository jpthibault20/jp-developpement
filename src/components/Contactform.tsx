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
import toast from "react-hot-toast";


const formSchema = z.object({
  Firstname: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  Lastname: z.string().min(2, {
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


export function Contactform({ message = "", setIsOpen = () => { } }: { message?: string, setIsOpen?: (load: boolean) => void }) {


  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
      Lastname: "",
      Phone: "",
      Email: "",
      Message: "",
    },
  })

  const sendEmail = async (values: z.infer<typeof formSchema>) => {

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'content-Type': 'application.json',
        },
        body: JSON.stringify(values),
      })

      if (response.status === 200) {
        console.log(values)
        sendEmail;
        toast.success("Message envoyé");
        form.reset();
        if (message !== "Votre message") setIsOpen(false);
      }
      else {
        throw new Error(`Email sending failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {


    }
  }

  return (
    <>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-4 text-[#c7d2fe]" >

          <FormField
            control={form.control}
            name="Firstname"
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
            name="Lastname"
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

          <Button type="submit" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl hover:bg-[#151335] hover:text-white">Submit</Button>
        </form>
      </Form>
    </>

  )
}

export default Contactform