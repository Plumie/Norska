import { Alpine } from 'alpinejs';


export {};

declare global {
  interface Window {
    Alpine: Alpine,
    Norska: Record<string, any>
  }
}
