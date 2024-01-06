import React, { useState } from 'react'
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Drawer = ({ list, isOpen }) => {
    const router = useRouter();

    return (        
    <aside className={`header__drawer ${isOpen ? 'is-open' : ''}`}>
        <div className="header__drawer-logo mb-4">
            <a href='/' className="inline-flex">
                <Image src={Logo} alt={''} className="w-[50px] xl:w-[60px] 2xl:w-[90px] 2xl:h-[90px]" width={Logo.width} height={Logo.height} />
            </a>
        </div>
        {list && (
            <ul className="header__navigation flex flex-col gap-y-3 uppercase">
            {list.map((item, i) => (
                <li key={i}>
                <a href={item.slug} className={`inline-block py-1 font-semibold text-md tracking-wide hover:text-primary-light border-s-2 hover:border-s-primary-light ps-3 transition-all duration-300 ${router.pathname === item.slug ? 'active text-primary-light border-s-primary-light' : ''}`}>
                    {item.name}
                </a>
                </li>
            ))}
            </ul>
        )}

    </aside>
  )
}

export default Drawer