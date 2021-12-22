export const CProgDistRate = (CProgDist, TotDist) => CProgDist / TotDist;
export const PProgDistRate = (PProgDist, TotDist) => PProgDist / TotDist;
export const CNonProgDistRate = (CProgDist, CTotDist, TotDist) =>
  (CTotDist - CProgDist) / TotDist;
export const PNonProgDistRate = (PProgDist, PTotDist, TotDist) =>
  (PTotDist - PProgDist) / TotDist;
