"use server";

import { draftMode } from "next/headers";

export async function disableDraftMode() {
  "use server";
  await Promise.allSettled([
    (await draftMode()).disable(),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]);
}
