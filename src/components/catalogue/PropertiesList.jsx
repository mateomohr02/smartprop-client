"use client";

import { use } from "react";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PropertiesList = ({ propertiesPromise }) => {
  const properties = use(propertiesPromise);

  return (
    <div>
      {properties.map((p) => (
        <div key={p.id}>
          <Link href={`/propiedades/${p.slug}`}>{p.title}</Link>
          <button
            onClick={() => {
              console.log("click");
            }}
          >
            <ChevronRight />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;
