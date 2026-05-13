import { ArrowUpRight, Globe, Lock } from "lucide-react";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  // Published & Verified Projects

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
    playStore:
      "https://play.google.com/store/apps/developer?id=ARM+-+Activation+Resources+Management",
    appStore:
      "https://apps.apple.com/us/developer/pt-mega-wira-mandiri/id1497270724",
  },

  {
    title: "Tetra Pulsa",
    description:
      "Fintech mobile app that allows users to instantly convert mobile credit (pulsa) into cash or e-wallet balance (Dana, OVO, GoPay, ShopeePay) with fast and secure transactions.",
    longDescription:
      "Tetra Pulsa is a leading pulsa-to-cash fintech platform in Indonesia. I developed this cross-platform mobile application using Flutter, which is now live on both Google Play Store and Apple App Store. Key features include real-time transaction processing, multiple payment methods, Xendit payment gateway integration, WebSocket-powered live chat support, transaction history, and strong security measures.",
    image: "/projects/tetra-pulsa.png",
    tags: [
      "Flutter",
      "Fintech",
      "WebSocket",
      "Real-time",
      "Mobile App",
      "Dart",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.tetra.pulsa",
    appStore: "https://apps.apple.com/id/app/tetra-pulsa/id6458982998",
    website: "https://tetrapulsa.com",
  },

  {
    title: "Kolam Ulam",
    description:
      "Complete aquaculture management app for Indonesian freshwater fish farmers. Features cultivation calculators, real-time expert consultations, sustainability guides, and built-in marketplace. Published on Google Play Store.",
    image: "/projects/kolam-ulam.png",
    tags: ["Flutter", "BLoC/GetX", "REST API", "Firebase", "Google Play"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.kolam.ulam.app",
  },

  {
    title: "EasyCool",
    description:
      "AC service booking & reporting application. Users can book technicians, track service progress, and manage AC maintenance (washing, repair, installation, Freon refill) with offline mode support.",
    image: "/projects/easycool.png",
    tags: ["Flutter", "Offline Mode", "Service Booking", "Google Play"],
    playStore: "https://play.google.com/store/apps/details?id=com.easycool.id",
  },

  // Ordo Apps & Enterprise Projects
  {
    title: "Fun Club Tutoring",
    description:
      "Interactive e-Learning app for mathematics tutoring (student + teacher versions). Supports tablet orientation, stylus free-style drawing, real-time data syncing, and offline mode.",
    image: "/projects/fct.png",
    tags: ["Flutter", "Offline Mode", "Education", "Tablet + Stylus"],
    private: true,
  },

  {
    title: "Texkleen",
    description:
      "Hotel & hospitality laundry management system with real-time GPS tracking, automatic reports, analytical dashboard, and task approval workflow.",
    image: "/projects/texkleen.png",
    tags: ["Flutter", "GPS Tracking", "Laravel", "Service Management"],
    private: true,
    website: "https://texkleenindo.com/",
  },

  // Fintech & E-commerce
  {
    title: "xymart",
    description:
      "Modern grocery & general goods delivery app (Alfagift-style) with Xendit payment integration, fast delivery, and Firebase Cloud Messaging.",
    image: "/projects/xymart.png",
    tags: ["Flutter", "Xendit", "FCM", "E-commerce"],
    private: true,
    website: "https://www.xymart.id/",
  },

  {
    title: "xymart Delivery",
    description:
      "Driver companion app for xymart with real-time order tracking and FCM notifications.",
    image: "/projects/xymart-delivery.png",
    tags: ["Flutter", "FCM", "Delivery App"],
    private: true,
    website: "https://www.xymart.id/",
  },

  {
    title: "ERP ORDO",
    description:
      "Comprehensive Enterprise Resource Planning system (including attendance module) built with Flutter for complex business workflows and multi-role access.",
    image: "/projects/erp-ordo.png",
    tags: ["Flutter", "ERP", "Clean Architecture"],
    private: true,
  },

  // {
  //   title: "Azarine App",
  //   description:
  //     "Internal invoice & performance management system for Azarine. Built role-based dashboards (GM, Manager, Supervisor, Staff) for monitoring efficiency and simplified invoice handling.",
  //   image: "/projects/azarine.png",
  //   tags: ["Flutter", "Clean Architecture", "Role-based Access"],
  //   playStore:
  //     "https://play.google.com/store/apps/details?id=com.azarine.azarine",
  // },

  // {
  //   title: "Pulsain",
  //   description:
  //     "Pulsa conversion app (similar to Tetra Pulsa) integrated with Xendit and real-time WebSocket features.",
  //   image: "/projects/pulsain.png",
  //   tags: ["Flutter", "Xendit", "WebSocket", "Fintech"],
  //   private: true,
  // },

  // Other Production Projects

  // {
  //   title: "Cartago Cashier",
  //   description:
  //     "Tablet-optimized POS application with offline mode and barcode scanner for fast retail transactions.",
  //   image: "/projects/cartago-cashier.png",
  //   tags: ["Flutter", "Offline First", "POS", "Tablet Optimized"],
  //   private: true,
  // },

  // {
  //   title: "Legacy Privilege",
  //   description:
  //     "Gamification and loyalty app with points system, cashback rewards, and customer retention features.",
  //   image: "/projects/legacy-privilege.png",
  //   tags: ["Flutter", "Gamification", "Loyalty System"],
  //   private: true,
  // },

  // {
  //   title: "Luxury Checker",
  //   description:
  //     "Luxury branded item authenticity verification app with Xendit payment and real-time WebSocket chat.",
  //   image: "/projects/luxury-checker.png",
  //   tags: ["Flutter", "Xendit", "WebSocket", "Authentication"],
  //   private: true,
  // },

  // {
  //   title: "Seaworth Navcomm",
  //   description:
  //     "Ship service and navigation communication app with real-time WebSocket chat functionality.",
  //   image: "/projects/seaworth.png",
  //   tags: ["Flutter", "WebSocket", "Real-time"],
  //   private: true,
  // },

  // {
  //   title: "Proton",
  //   description:
  //     "Pest control management application for scheduling, reporting, and operational efficiency.",
  //   image: "/projects/proton.png",
  //   tags: ["Flutter", "Service Management"],
  //   private: true,
  // },

  // {
  //   title: "ERP Web (Lenna Usaha Sejati)",
  //   description:
  //     "Web-based ERP application developed with Flutter Web for CV. Lenna Usaha Sejati.",
  //   image: "/projects/erp-lus.png",
  //   tags: ["Flutter Web", "ERP"],
  //   website: "https://lennausahasejati.com",
  // },

  // // Bali Project Indonesia

  // {
  //   title: "OpenJob",
  //   description:
  //     "Job search mobile app with BLoC state management, Firebase Cloud Messaging, and clean architecture (near-release stage).",
  //   image: "/projects/openjob.png",
  //   tags: ["Flutter", "BLoC", "FCM", "Clean Architecture"],
  //   private: true,
  // },

  // {
  //   title: "Battery Bird",
  //   description:
  //     "Portable power bank rental service app with full UI/UX and clean architecture implementation.",
  //   image: "/projects/battery-bird.png",
  //   tags: ["Flutter", "Clean Architecture", "Rental App"],
  //   private: true,
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              create real impact.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Real-world production applications — from published consumer apps to
            enterprise systems used by businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGooglePlay className="w-5 h-5" />
                    </a>
                  )}

                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaAppStoreIos className="w-5 h-5" />
                    </a>
                  )}

                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}

                  {project.private && (
                    <div className="p-3 rounded-full glass opacity-70">
                      <Lock className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {(project.playStore ||
                    project.appStore ||
                    project.website) && (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  )}
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.private && (
                  <div className="text-xs text-muted-foreground italic">
                    Private enterprise project — source code not publicly
                    available.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
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
