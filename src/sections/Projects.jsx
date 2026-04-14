import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  // Published & Verified Projects
  {
    title: "Kolam Ulam",
    description:
      "Complete aquaculture management app for Indonesian freshwater fish farmers. Features cultivation calculators, real-time expert consultations, sustainability guides, and built-in marketplace. Published on Google Play Store.",
    image: "/projects/kolam-ulam.png",
    tags: ["Flutter", "BLoC/GetX", "REST API", "Firebase", "Google Play"],
    link: "https://play.google.com/store/apps/details?id=com.kolam.ulam.app",
    github: "#",
  },
  {
    title: "EasyCool",
    description:
      "AC service booking & reporting application. Users can book technicians, track service progress, and manage AC maintenance (washing, repair, installation, Freon refill) with offline mode support.",
    image: "/projects/easycool.png",
    tags: ["Flutter", "Offline Mode", "Service Booking", "Google Play"],
    link: "https://play.google.com/store/apps/details?id=com.easycool.id",
    github: "#",
  },
  // {
  //   title: "Azarine App",
  //   description:
  //     "Internal invoice & performance management system for Azarine. Built role-based dashboards (GM, Manager, Supervisor, Staff) for monitoring efficiency and simplified invoice handling.",
  //   image: "/projects/azarine.png",
  //   tags: ["Flutter", "Clean Architecture", "Role-based Access"],
  //   link: "https://play.google.com/store/apps/details?id=com.azarine.azarine",
  //   github: "#",
  // },

  // Ordo Apps & Enterprise Projects
  {
    title: "Fun Club Tutoring",
    description:
      "Interactive e-Learning app for mathematics tutoring (student + teacher versions). Supports tablet orientation, stylus free-style drawing, real-time data syncing, and offline mode.",
    image: "/projects/fct.png",
    tags: ["Flutter", "Offline Mode", "Education", "Tablet + Stylus"],
    link: "#",
    github: "#",
  },

  {
    title: "Texkleen",
    description:
      "Hotel & hospitality laundry management system with real-time GPS tracking, automatic reports, analytical dashboard, and task approval workflow.",
    image: "/projects/texkleen.png",
    tags: ["Flutter", "GPS Tracking", "Laravel", "Service Management"],
    link: "#",
    github: "#",
  },
  {
    title: "ARM (Activation Resource Management)",
    description:
      "ARM (Activation Resource Management) – Part of Flavor 3 enterprise suite (Synergic, Zpectra, Magnum). Comprehensive equipment rental & asset management system for Event Organizers featuring rental planning, real-time monitoring, event fulfillment, and post-event evaluation.",
    image: "/projects/arm.png",
    tags: [
      "Flutter",
      "Rental System",
      "Event Management",
      "Enterprise",
      "multi-App Suite",
    ],
    link: "https://play.google.com/store/apps/developer?id=ARM+-+Activation+Resources+Management",
    github: "#",
  },

  // Fintech & E-commerce
  {
    title: "Xymart",
    description:
      "Modern grocery & general goods delivery app (Alfagift-style) with Xendit payment integration, fast delivery, and Firebase Cloud Messaging.",
    image: "/projects/xymart.png",
    tags: ["Flutter", "Xendit", "FCM", "E-commerce"],
    link: "#",
    github: "#",
  },
  {
    title: "Xymart Delivery",
    description:
      "Driver companion app for xymart with real-time order tracking and FCM notifications.",
    image: "/projects/xymart-delivery.png",
    tags: ["Flutter", "FCM", "Delivery App"],
    link: "#",
    github: "#",
  },
  // {
  //   title: "Tetra Pulsa",
  //   description:
  //     "Pulsa-to-cash conversion fintech app with Xendit payment gateway and real-time WebSocket chat.",
  //   image: "/projects/tetra-pulsa.png",
  //   tags: ["Flutter", "Xendit", "WebSocket", "Fintech"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Pulsain",
  //   description:
  //     "Pulsa conversion app (similar to Tetra Pulsa) integrated with Xendit and real-time WebSocket features.",
  //   image: "/projects/pulsain.png",
  //   tags: ["Flutter", "Xendit", "WebSocket", "Fintech"],
  //   link: "#",
  //   github: "#",
  // },

  // Other Production Projects
  // {
  //   title: "Cartago Cashier",
  //   description:
  //     "Tablet-optimized POS application with offline mode and barcode scanner for fast retail transactions.",
  //   image: "/projects/cartago-cashier.png",
  //   tags: ["Flutter", "Offline First", "POS", "Tablet Optimized"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Legacy Privilege",
  //   description:
  //     "Gamification and loyalty app with points system, cashback rewards, and customer retention features.",
  //   image: "/projects/legacy-privilege.png",
  //   tags: ["Flutter", "Gamification", "Loyalty System"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Luxury Checker",
  //   description:
  //     "Luxury branded item authenticity verification app with Xendit payment and real-time WebSocket chat.",
  //   image: "/projects/luxury-checker.png",
  //   tags: ["Flutter", "Xendit", "WebSocket", "Authentication"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Seaworth Navcomm",
  //   description:
  //     "Ship service and navigation communication app with real-time WebSocket chat functionality.",
  //   image: "/projects/seaworth.png",
  //   tags: ["Flutter", "WebSocket", "Real-time"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Proton",
  //   description:
  //     "Pest control management application for scheduling, reporting, and operational efficiency.",
  //   image: "/projects/proton.png",
  //   tags: ["Flutter", "Service Management"],
  //   link: "#",
  //   github: "#",
  // },
  {
    title: "ERP ORDO",
    description:
      "Comprehensive Enterprise Resource Planning system (including attendance module) built with Flutter for complex business workflows and multi-role access.",
    image: "/projects/erp-ordo.png",
    tags: ["Flutter", "ERP", "Clean Architecture"],
    link: "#",
    github: "#",
  },
  {
    title: "ERP Web (Lenna Usaha Sejati)",
    description:
      "Web-based ERP application developed with Flutter Web for CV. Lenna Usaha Sejati.",
    image: "/projects/erp-lus.png",
    tags: ["Flutter Web", "ERP"],
    link: "#",
    github: "#",
  },

  // // Bali Project Indonesia
  // {
  //   title: "OpenJob",
  //   description:
  //     "Job search mobile app with BLoC state management, Firebase Cloud Messaging, and clean architecture (near-release stage).",
  //   image: "/projects/openjob.png",
  //   tags: ["Flutter", "BLoC", "FCM", "Clean Architecture"],
  //   link: "#",
  //   github: "#",
  // },
  // {
  //   title: "Battery Bird",
  //   description:
  //     "Portable power bank rental service app with full UI/UX and clean architecture implementation.",
  //   image: "/projects/battery-bird.png",
  //   tags: ["Flutter", "Clean Architecture", "Rental App"],
  //   link: "#",
  //   github: "#",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Production mobile and web applications I've built — from published
            Google Play apps to complex enterprise systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 70}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <AnimatedBorderButton>
              Let's Build Something
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </button>
        </div>
      </div>
    </section>
  );
};
