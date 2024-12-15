"use client";

import { DataTable } from "@/components/tables/data-table";
import { columns, User } from "@/components/tables/columns-live";

import { useEffect, useState } from "react";

export default function Page() {
  const [datos, setDatos] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&timezone=America%2FSantiago",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "da4b544b64msh0e2301a8fea730ep1449a5jsn4293aa1e7d39",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();

      setDatos(data.response);
    };
    fetchData();
    // const interval = setInterval(fetchData, 60000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="mx-auto text-white max-w-[600px]">
        <div className="mt-3">
          <h2 className="text-3xl font-bold tracking-tight">Live</h2>
        </div>
        <div>
          <DataTable columns={columns} data={datos} />
        </div>
      </section>
    </>
  );
}
