import Arcade from "../assets/Timepass/icon-arcade.svg";
import Advanded from "../assets/Timepass/icon-advanced.svg";
import Pro from "../assets/Timepass/icon-pro.svg";

export const stepData = [
  {
    title: "Personal Info",
    subtitle: "Please provide your name, email, address and phone number",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks Ok before confirming",
  },
];

export const planDetails = [
  {
    id: crypto.randomUUID(),
    icon: Arcade,
    title: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
    year_benefit: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Advanded,
    title: "Advanced",
    price: {
      monthly: 12,
      yearly: 120,
    },
    year_benefit: "2 months free",
  },
  {
    id: crypto.randomUUID(),
    icon: Pro,
    title: "Pro",
    price: {
      monthly: 15,
      yearly: 150,
    },
    year_benefit: "2 months free",
  },
];

export const addOns = [
  {
    id: crypto.randomUUID(),
    type: "Online service",
    subtitle: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: crypto.randomUUID(),
    type: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: crypto.randomUUID(),
    type: "Customizable profile",
    subtitle: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export const steps = [
  {
    id: 1,
    step: 1,
    title: "YOUR INFO",
  },
  {
    id: 2,
    step: 2,
    title: "SELECT PLAN",
  },
  {
    id: 3,
    step: 3,
    title: "ADD-ONS",
  },
  {
    id: 4,
    step: 4,
    title: "SUMMARY",
  },
];
