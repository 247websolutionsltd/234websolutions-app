import emailjs from "@emailjs/browser";

export interface ContactForm {
  name: string;
  contact: string;
  message: string;
}

export const sendContactEmail = async (data: ContactForm) => {
  return emailjs.send(
    process.env.EXPO_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: data.name,
      contact: data.contact,
      message: data.message,
    },
    {
      publicKey: process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY!,
    }
  );
};