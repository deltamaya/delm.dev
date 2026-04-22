import { useState } from 'react'
import { Icon } from '@iconify/react'

interface SocialLinkProps {
    href: string
    label: string
    iconClass: string
}

export default function SocialLink({ href, label, iconClass }: SocialLinkProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <a
            href={href}
            className="lg:text-3xl text-2xl hover:text-red-600 transition-colors inline-block"
            aria-label={label}
            style={{
                transform: hovered ? 'scale(1.25)' : 'scale(1)',
                transition: 'transform 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Icon icon={iconClass} />
        </a>
    )
}
