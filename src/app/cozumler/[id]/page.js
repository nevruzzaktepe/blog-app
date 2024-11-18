"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";

export default function CozumDetail({ params }) {
  const router = useRouter();
  const resolvedParams = use(params); // Promise olan params çözülüyor.

  return (
    <div>
      <button className="button" onClick={() => router.push("/cozumler")}>
        Çözümlere Geri Dön
      </button>
      <h1>Çözüm Detay Sayfası</h1>
      <h1>Çözüm Detay Numarası {resolvedParams.id}</h1>
    </div>
  );
}
