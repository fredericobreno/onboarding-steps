import { IStep } from "./components/Step";

export const steps = [
  {
    path: "/",
    title: "Going electric starts with understanding your needs",
    subtitle:
      "We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.",
    icons: [
      {
        name: "organization",
        text: "Tell us about your organization",
      },
      {
        name: "car",
        text: "Tell us about your vehicles",
      },
      {
        name: "chart",
        text: "See how much you can save",
      },
    ],
    buttonText: "Create Your First Vehicle Set",
  },
  {
    path: "/zip-code",
    title: "General Information",
    subtitle:
      "We use this information to calculate fuel costs and applicable incentives",
    form: {
      field: {
        type: "input",
        label: "Zip Code",
        name: "zipCode",
        helpText: "Used to check incentive applicability and fuel prices",
      },
    },
  },
  {
    path: "/building-type",
    title: "General Information",
    subtitle:
      "We use this information to calculate fuel costs and applicable incentives",
    form: {
      field: {
        type: "select",
        label: "Building Type",
        name: "buildingType",
        options: [
          { value: "home", label: "Home (garage)" },
          { value: "small-office", label: "Small Office" },
          { value: "large-office", label: "Large Office" },
          { value: "warehouse", label: "Warehouse" },
          { value: "depot", label: "Depot" },
          { value: "school", label: "School" },
          { value: "apartment", label: "Apartment Building" },
        ],
      },
    },
  },
] satisfies ({ path: string } & IStep)[];
