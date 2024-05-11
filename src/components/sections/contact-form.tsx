import React from "react";
import { Input } from "@nextui-org/input";
export default function Contact() {
    return (
        <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
            <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
                If you had any issues or you liked our product, please share
                with us!
            </p>
            <div className="mb-4">
                <div className="flex w-full flex-wrap  flex-col md:flex-nowrap gap-4">
                    <Input type="email" size="sm" label="Email" />
                    <Input type="textarea" label="Message" size="lg" />
                </div>
            </div>

            <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Send
            </button>
            <p className="mt-3 text-xs text-gray-500">
                Feel free to connect with us on social media platforms.
            </p>
        </div>
    );
}
