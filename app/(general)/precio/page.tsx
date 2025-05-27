// MAS ESPECIFICO PARO LOS META TAGS
import type { Metadata } from "next";
export const metadata: Metadata = {
 title: 'Este es el Precio',
 description: 'Descripcion del Precio',
 keywords: ["tu mama", "tu papa", "ejemplo"],
};
export default function PrecioPage() {
    return (
        <div>
            <h1 className="text-4xl text-pink-600">Pagina del Precio</h1>
        </div>
    );
}