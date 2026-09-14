import { apiFetch } from "@/lib/api";
import { GlobalOption } from "@/types/global-options";

export async function getGlobalOptions(): Promise<GlobalOption[]> {
  const data = await apiFetch<Record<string, string | null>>(
    "/global-options",
  );

  return Object.entries(data).map(
    ([option_key, option_value]) => ({
      option_key,
      option_value,
    }),
  );
}