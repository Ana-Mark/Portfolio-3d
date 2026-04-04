// ==============================
// 🧠 BASE DE DATOS CENTRAL DE MODELOS
// ==============================
// Aquí se define TODO lo relacionado con cada modelo:
// - nombre
// - ruta
// - descripción
// - software
// - secciones disponibles

export const MODELS = [

  // ==============================
  // 🔫 MODELO 0 - WEAPON
  // ==============================
  {
    name: "Weapon . M-240B",
    path: "/models/Weapon_Portfolio_04.glb",

    // Texto descriptivo
    description: "3D Hard Surface Asset.",

    // Software utilizado
    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
      { name: "Plasticity", icon: "/icons/Plasticity_Icon.png" },
      { name: "ZBrush", icon: "/icons/ZBrush_Icon.png",
        renders: ["/renders/blender1.png", "/renders/blender2.png"]
      },
      { name: "Rizom UV", icon: "/icons/Rizom_Icon.png" },
      { name: "Substance 3D Painter", icon: "/icons/3DPainter_Icon.png" },
      { name: "Marmoset Toolbag", icon: "/icons/Marmoset_Icon.png" },
    ],

    // Qué tabs tiene este modelo
    sections: ["description", "uv", "render"],
  },

  // ==============================
  // 🔥 MODELO 1 - ZIPPO
  // ==============================
  {
    name: "Zippo Lighter",
    path: "/models/Zippo_Portfolio_01.glb",

    description: "3D asset inspired by the classic Poker game.",

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
      { name: "Rizom UV", icon: "/icons/Rizom_Icon.png" },
      { name: "Substance 3D Painter", icon: "/icons/3DPainter_Icon.png" },
      { name: "Marmoset Toolbag", icon: "/icons/Marmoset_Icon.png" },
      { name: "Photoshop", icon: "/icons/Photoshop_Icon.png" },
    ],

    sections: ["description", "uv", "render"],
  },

  // ==============================
  // 🧱 MODELO 2 - MODULAR
  // ==============================
  {
    name: "Modular Environment",
    path: "/models/VendingMachine.glb",

    description: "Environment modular system.",

    // 👇 ahora el vídeo también vive aquí
    video: "/videos/Video_Modular-Trim_1.gif",

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
      { name: "Substance 3D Painter", icon: "/icons/3DPainter_Icon.png" },
      { name: "Unreal Engine", icon: "/icons/Unreal_Icon.png" },
    ],

    sections: ["video", "assets", "uv", "render"],
    
  },

  // ==============================
  // 🧪 MODELO 3 - EXTRA
  // ==============================
  {
    name: "Work in progress",
    path: "/models/Calendar.glb",

    description: "Additional portfolio piece.",

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
    ],

    sections: ["description"],
  }
]