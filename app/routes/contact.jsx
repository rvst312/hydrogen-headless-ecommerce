import { useState } from 'react';

export default function Contact() {

    const contact = {
        title: "Contáctanos si tiene cualquier duda.",
        email: "juicycbdstore@protonmail.com",
        instagram: "@juicy.hemp",
        phone: "+34-611674140",
    }

    return (
        <div className="contact">
            <section className="hero">
                <h1>
                    Contacto
                </h1>
            </section>
            <div className="contact-wrapper">
                <div className="left">
                    <h2>
                        {contact.title}
                    </h2>
                    <div>
                        <h4>
                            ¿Tienes dudas?
                        </h4>
                        <span>
                            <strong>
                                Envíanos un mail a
                            </strong>
                            <a href={"mailto:" + contact.email}>
                                {contact.email}
                            </a>
                        </span>
                        <br />
                        <span>
                            <strong>
                                Envíanos un MD a
                            </strong>
                            <a href={"https://www.instagram.com/" + contact.instagram}>
                                {contact.instagram}
                            </a>
                        </span>
                        <br />
                        <h4>
                            HORARIO DE ATENCIÓN:
                        </h4>
                        <span>
                            Lunes a Viernes de 10:00 a 18:00hrs
                        </span>
                    </div>
                </div>
            </div >
        </div >
    )
}
