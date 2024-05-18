import type { Locals } from "./types/locals";

declare module "astro" {
    interface AstroGlobal {
        locals : Locals
    }
}