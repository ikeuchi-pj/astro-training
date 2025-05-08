import { createClient } from "microcms-js-sdk";

// JavaScriptでは型は不要！
export const microcmsClient = createClient({
  
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
});
