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
    description: `3D Hard Surface Asset, recreation of the weapon M-240B.
    
    Focused on clean topology and optimization of multiples UV Sets.
    
    Combination and use of Blender, Plasticity and Zbrush, for the modeling.`,

     links: [
    {
      label: "View on ArtStation",
      url: "https://tu-link.com"
    }
   ],

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

    description: `3D asset inspired by the classic Poker game.
    
    Focused on clean topology and realistic metalic textures and damage`,

    links: [
    {
      label: "View on ArtStation",
      url: "https://tu-link.com"
    }
   ],

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
    name: `Modular 
    Environment`,
    path: "/models/VendingMachine.glb",

    description: `Modular environment, based on the "Ho oh Club" - Cyberpunk.
    Focused on the use of modular assets for an optimized environment.
    
    Use of Unreal engine, Substance Painter and Substance Designer for the textures and light `,

    // 👇 ahora el vídeo también vive aquí
    video: "/videos/Video_Modular - Trim.mp4",

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
    name: "Perth",
    path: "/models/Calendar.glb",

    description: ` Work in progress.

    I'm currently working on this piece.
    Its a recreation of a hand made clock by the artist Eric Freitas.
    
    Focused on a realistic modeling of a clock mechanism, with all the pieces this includes`,

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
    ],

    sections: ["description"],
  }
]