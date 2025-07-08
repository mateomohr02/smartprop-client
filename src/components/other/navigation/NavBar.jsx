import Filters from "./Filters";
import { fetchFilters } from "@/utils/fetchFilters";
import { Suspense } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const filters = fetchFilters();

  return (
    <nav >
      <div>
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <Image
                alt="Logo Inmobiliaria"
                src="/logo.svg"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <NavLinks />
        </div>
        <Suspense fallback={<button >Mostrar Filtros</button>}>
          <Filters filtersPromise={filters} />
        </Suspense>
      </div>
    </nav>
  );
};

export default NavBar;
