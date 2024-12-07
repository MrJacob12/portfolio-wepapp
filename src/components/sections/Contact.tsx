import React from 'react'

import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";

function Contact() {
    const { t } = useTranslation();
    const [state, handleSubmit] = useForm("xanydekd");

    return (
        <section
            id="contact"
            className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
        >
            <div className="container px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
                {t("contact.title")}
            </h2>
            <div className="max-w-xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    {t("contact.name")}
                    </label>
                    <Input id="name" type="text" name="name" required />
                    <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    />
                </div>
                <div>
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    {t("contact.email")}
                    </label>
                    <Input id="email" type="email" name="email" required />
                    <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    />
                </div>
                <div>
                    <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                    {t("contact.message")}
                    </label>
                    <Textarea
                    id="message"
                    name="message"
                    className="min-h-[150px]"
                    required
                    />
                    <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full"
                    disabled={state.submitting}
                >
                    {t("contact.send")}
                </Button>
                </form>
                {state.succeeded && (
                <p className="mt-4 text-center text-green-500">
                    {t("contact.success")}
                </p>
                )}
                <div className="flex justify-center gap-6 mt-12">
                <a
                    href="mailto:jakub.buciuto@gmail.com"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                    <Mail className="h-6 w-6" />
                </a>
                <a
                    href="https://github.com/MrJacob12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                    <Github className="h-6 w-6" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jakub-buciuto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                >
                    <Linkedin className="h-6 w-6" />
                </a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Contact