import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next"
import { MailOpen, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
const Contact = () => {
    const { t } = useTranslation()
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-transparent border-none cursor-pointer">{t("nav.contact")}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("nav.contact")}</DialogTitle>
            <DialogDescription className="flex justify-center">
            <Button variant="outline" className="border-none cursor-pointer"><MailOpen /> Email</Button>
            <Button variant="outline" className="border-none cursor-pointer hover:bg-white bg-white text-green-500"><Phone />WhatsApp</Button>
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="" placeholder="Your Name" className="col-span-3" />
            </div>
            <div className="grid items-center gap-4">
            <Label htmlFor="message">Your message</Label>
              <Textarea id="message" className="col-span-3" placeholder="Type your message here."/>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="cursor-pointer">Send message</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;
