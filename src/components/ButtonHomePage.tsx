"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import ContactButton from './ContactButton';

const ButtonHomePage = ({ color }: { color: String }) => {
    const [message, setMessage] = useState("Message");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {color == "blue" ? (
                <>
                    <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl w-[150px] mr-10 hover:bg-[#151335] hover:text-white" onClick={() => {
                        setIsOpen(true)
                        setMessage("Votre message ici")
                    }} tabIndex={0}
                        aria-label="Contactez-nous">
                        Contactez-nous
                    </Button>

                    <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl w-[150px] hover:bg-[#151335] hover:text-white" onClick={() => {
                        setIsOpen(true)
                        setMessage("Détail de votre projet")
                    }} tabIndex={0}
                        aria-label="Contactez-nous">
                        Obtenir un devis
                    </Button>
                </>

            ) : (
                <>
                    <Button variant="ghost" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl w-[150px] mr-10 hover:bg-[#746cff] hover:text-white" onClick={() => {
                        setIsOpen(true)
                        setMessage("Votre message ici")
                    }} tabIndex={0}
                        aria-label="Contactez-nous">
                        Contactez-nous
                    </Button>

                    <Button variant="ghost" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl w-[150px] hover:bg-[#746cff] hover:text-white" onClick={() => {
                        setIsOpen(true)
                        setMessage("Détail de votre projet")
                    }} tabIndex={0}
                        aria-label="Contactez-nous">
                        Obtenir un devis
                    </Button>
                </>
            )}

            {isOpen && (

                <ContactButton setIsOpen={setIsOpen} message={message} />
            )}

        </div>
    )
}

export default ButtonHomePage
