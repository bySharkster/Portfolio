const config = {
  phoneNumber: "+1 (939) 638-8383",
  email: "contact@fernandoaponte.dev",
  location: " Orlando, FL, USA",
  projects: [
    {
      id: 1,
      title: "Digital Sunsets",
      description:
        "Collaborative Website Project to gather leads from prospect clients interested on website design and development services.",
      imageUrl: "/images/digital-sunsets.jpg",
      projectUrl: "https://digital-sunsets-amber.vercel.app/",
    },
    {
      id: 2,
      title: "Kaponte Health",
      description:
        "Massage Therapy Scheduler Website for Kaponte Health in Puerto Rico.",
      imageUrl: "/images/kaponte-health.jpg",
      projectUrl: "https://www.kapontehealth.com/",
    },
    {
      id: 3,
      title: "Roberto Insurance",
      description:
        "Insurance and Annuity Website for Roberto Insurance in Puerto Rico.",
      imageUrl: "/images/roberto-insurance.jpg",
      projectUrl: "https://robertoinsurance.framer.website/",
    },
    {
      id: 4,
      title: "Alber Car Rental",
      description: "Car Rental Website for Albert Car Rental in Puerto Rico.",
      imageUrl: "/images/albert-car-rental.jpg",
      projectUrl: "https://www.albertcarrental.com/",
    },
  ],
  navPaths: [
    { url: "/" },
    { url: "/about" },
    { url: "/portfolio" },
    { url: "/contact" },
  ],
};

module.exports = config;
