'use client';
// Rafc es para crear un componente rapido
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import style from './Actividadlikeada.module.css';
interface Props{
    path: string;
    text: string;
}
export const ActividadLink = ({path, text}:Props) => {
  const Pathname = usePathname();
  console.log(Pathname);
  return ( 
    <Link  
    className={`${style.link} ${Pathname === path && style['active-link']}`} 
    href={path}>
    {text}
    </Link>
  )
}
