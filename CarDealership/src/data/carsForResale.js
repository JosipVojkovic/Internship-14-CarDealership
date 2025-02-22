/*
id - može biti inkrementirajući broj ili uuid
marku (npr. Toyota)
model (npr. Yaris)
tip - unosi se pomoću select inputa
godinu proizvodnje
datum isticanja registracije
*/

export const carsForSale = [
  {
    id: 1,
    brand: "BMW",
    model: "X5",
    type: "SUV",
    productionYear: "2018",
    registrationExpirationDate: "08.11.2025",
  },
  {
    id: 2,
    brand: "Mercedes",
    model: "C-Class",
    type: "Limuzina",
    productionYear: "2022",
    registrationExpirationDate: "21.04.2025",
  },
  {
    id: 3,
    brand: "Audi",
    model: "R8",
    type: "Sportski",
    productionYear: "2020",
    registrationExpirationDate: "15.08.2025",
  },
];
