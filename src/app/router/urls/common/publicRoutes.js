import { BASE_URL } from "app/config/env";



export const publicRoutes = {
  "public.privacyPolicy": `${BASE_URL}/privacy-policy`,
  "public.rules": `${BASE_URL}/regulations`,
  "public.euProject": `${BASE_URL}/eu-project`,
  "public.contact": `${BASE_URL}/contact`,
  "public.pricing": `${BASE_URL}/pricing`,
  "public.faq": `${BASE_URL}/faq`,
  "public.events": `${BASE_URL}/events`,
  "public.units": `${BASE_URL}/units`,
  "public.marketplace": `${BASE_URL}/marketplace`,
  "public.marketplace.show": (nId = ":noticeId") => `${BASE_URL}/marketplace/${nId}`,
  "public.lost": `${BASE_URL}/lost`,
  "public.landing": `${BASE_URL}`,
  "public.events.show": (eId = ":eventId") => `${BASE_URL}/events/${eId}`
};
