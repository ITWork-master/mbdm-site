import React from 'react'
import SectionTitle from '../tools/SectionTitle'
import { AtSign, Facebook, PhoneCall } from 'lucide-react';

interface ContactItems {
    id: string;
    icon: React.ComponentType<any>;
    content: string | React.ReactNode;
    link: string;
}

const Contact: React.FC = () => {

    const contacts: ContactItems[] = [
        {
            id: "contact",
            icon: PhoneCall,
            content: (
                <>
                    +261 38 73 642 27<br />
                    +261 32 80 155 24<br />
                    +216 34 18 613 68
                </>
            ),
            link: "tel:+261387364227"
        },
        {
            id: "facebook",
            icon: Facebook,
            content: "MBDM est à Toamasina",
            link: "https://facebook.com/profile/"
        },
        {
            id: 'email',
            icon: AtSign,
            content: 'directionmbdm@gmail.com',
            link: "mailto:directionmbdm@gmail.com"
        }
    ]

    const handleContactClick = (contact: ContactItems) => {
        if (contact.link) {
            if (contact.id === 'facebook') {
                window.open(contact.link, '_blank', 'noopener,noreferrer');
            } else {
                window.location.href = contact.link;
            }
        }
    }

    const getIconBgColor = (id: string) => {
        switch (id) {
            case 'contact':
                return 'bg-green-100';
            case 'facebook':
                return 'bg-blue-100';
            case 'email':
                return 'bg-red-100';
            default:
                return 'bg-base-200';
        }
    }

    const getIconColor = (id: string) => {
        switch (id) {
            case 'contact':
                return 'text-green-600';
            case 'facebook':
                return 'text-blue-600';
            case 'email':
                return 'text-red-600';
            default:
                return 'text-base-content';
        }
    }

    const getBorderColor = (id: string) => {
        switch (id) {
            case 'contact':
                return 'border-accent-content';
            case 'facebook':
                return 'border-accent-content';
            case 'email':
                return 'border-accent-content';
            default:
                return 'border-accent-content';
        }
    }

    return (
        <section id='contact' className='bg-base-100'>
            <div className="container mx-auto px-4">
                <SectionTitle
                    title='Contactez-nous !'
                    miniIntro='Voulez-vous nous contacter ?'
                />

                <div className="max-w-4xl mx-auto mt-8">
                    {/* Version Desktop */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contacts.map((contact) => {
                            const IconComponent = contact.icon;
                            return (
                                <div
                                    key={contact.id}
                                    className={`bg-base-100 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border-2 ${getBorderColor(contact.id)} ${contact.link ? 'hover:scale-105 transform' : ''
                                        }`}
                                    onClick={() => handleContactClick(contact)}
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`${getIconBgColor(contact.id)} p-3 rounded-full mb-4`}>
                                            <IconComponent
                                                size={32}
                                                className={getIconColor(contact.id)}
                                            />
                                        </div>
                                        <h3 className="font-semibold text-base-content mb-2 capitalize">
                                            {contact.id}
                                        </h3>
                                        <div className="text-base-content/80 text-sm leading-relaxed">
                                            {contact.content}
                                        </div>
                                        {contact.link && (
                                            <span className="mt-3 text-base-content/70 text-sm font-medium hover:text-base-content transition-colors">
                                                Cliquez pour {contact.id === 'email' ? 'envoyer un email' : contact.id === 'facebook' ? 'visiter notre page' : 'appeler'}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Version Mobile Compacte */}
                    <div className="md:hidden flex flex-col gap-4">
                        {contacts.map((contact) => {
                            const IconComponent = contact.icon;
                            return (
                                <div
                                    key={contact.id}
                                    className={`bg-base-100 rounded-lg border-2 p-4 cursor-pointer hover:shadow-md transition-all duration-200 ${getBorderColor(contact.id)}`}
                                    onClick={() => handleContactClick(contact)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`${getIconBgColor(contact.id)} p-2 rounded-full flex-shrink-0`}>
                                            <IconComponent
                                                size={24}
                                                className={getIconColor(contact.id)}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-base-content text-sm font-medium leading-tight">
                                                {contact.content}
                                            </div>
                                            <span className="text-base-content/60 text-xs mt-1 block">
                                                {contact.id === 'email' ? 'Envoyer un email' : contact.id === 'facebook' ? 'Visiter notre page' : 'Appeler maintenant'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Horaires d'ouverture */}
                    <div className="mt-12 text-center">
                        <h3 className="text-xl font-semibold text-base-content mb-4">
                            Horaires d'ouverture
                        </h3>
                        <div className="bg-base-100 rounded-lg shadow-md p-6 max-w-2xl mx-auto border-2 border-accent-content">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base-content/80">
                                <div>
                                    <p className="font-medium text-base-content">Lundi - Vendredi</p>
                                    <p>08:00 - 17:00</p>
                                </div>
                                <div>
                                    <p className="font-medium text-base-content">Samedi</p>
                                    <p>08:00 - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact