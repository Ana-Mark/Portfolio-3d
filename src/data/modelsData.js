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
    description: {
      en:`Hard Surface 3D asset, a recreation of the M-240B weapon.
      
    Focused on clean topology and optimization of multiple UV Sets.
    
    Modeled using Blender, Plasticity, and ZBrush.`,
    es:`3D Hard Surface Asset, una recreación del arma M-240B.
    
    Me he centrado en una topología limpia y optimización de múltiples sets de UV.
    
    Modelado realizado en Blender, Plasticity y ZBrush.`
    },

     links: [
    {
      label: "View on ArtStation",
      url: "https://a_mark.artstation.com/projects/DLw2E9"
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
    camera: {
  default: {
    position: [0.1119, 0.0322, -0.5739],
    target: [0.0226, -0.0293, -0.0042]
  }
},
lights: [
  { type: "ambient", intensity: 0.9, color: "#ffffff" },

  { type: "directional", position: [3, 5, -2], intensity: 2.5, color: "#f7ceaa" }, // cálido

  { type: "directional", position: [-3, 2, 2], intensity: 2, color: "#dab4b4" } // frío (rim)
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

    description:{
      en:`3D asset inspired by a classic poker theme.
    
    Focused on clean topology and realistic metallic materials, including wear and surface detail.`,
    es:`Asset 3D inspirado en una temática clásica de póker.
    
    Me he centrado en una topología limpia y en materiales metálicos realistas, incluyendo desgastes y detalles superficiales.`


    },

    links: [
    {
      label: "View on ArtStation",
      url: "https://a_mark.artstation.com/projects/ZlQ0ex"
    }
   ],

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
      { name: "Rizom UV", icon: "/icons/Rizom_Icon.png" },
      { name: "Substance 3D Painter", icon: "/icons/3DPainter_Icon.png" },
      { name: "Marmoset Toolbag", icon: "/icons/Marmoset_Icon.png" },
      { name: "Photoshop", icon: "/icons/Photoshop_Icon.png" },
    ],

    camera: {
  default: {
    position: [0.01699, -0.00014, -0.1025],
    target: [-0.0104, -0.00505, -0.00651]
  }
},
lights: [
  { type: "ambient", intensity: 0.15, color: "#ffffff" },

  { type: "directional", position: [3, 5, -2], intensity: 2, color: "#f7ceaa" }, // cálido

  { type: "directional", position: [-3, 2, 2], intensity: 1, color: "#ffc4c4" } // frío (rim)
],

    sections: ["description", "uv", "render"],
  },

  // ==============================
  // 🧱 MODELO 2 - MODULAR
  // ==============================
  {
    name: `Modular Environment`,
    path: "/models/VendingMachine.glb",

    description: {
      en:`Modular environment based on the "Ho-Oh Club" - Cyberpunk.
    Focused on the use of modular assets to createan optimized and reusable environment.
    
    Textures and lighting created using Unreal Engine, Substance Painter, and Substance Designer. `,
    es: `Entorno modular basado en el "Ho-Oh Club" - Cyberpunk.
    Me he centrado en el uso de assets modulares para para crear un entorno optimizado y reutilizable.
    
    Texturas e Iluminación creadas en Unreal Engine, Substance Painter y Substance Designer.`



    },

    // 👇 ahora el vídeo también vive aquí
    video: "/videos/Video_Modular - Trim.mp4",

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
      { name: "Rizom UV", icon: "/icons/Rizom_Icon.png" },
      { name: "Substance 3D Painter", icon: "/icons/3DPainter_Icon.png" },
      { name: "Substance 3D Designer", icon: "/icons/3DDesigner_Icon.png" },
      { name: "Marmoset Toolbag", icon: "/icons/Marmoset_Icon.png" },
      { name: "Unreal Engine", icon: "/icons/Unreal_Icon.png" },
      { name: "Adobe Premiere", icon: "/icons/Premiere_Icon.png" },
    ],

    camera: {
  default: {
    position: [0.1119, 0.0322, -0.5739],
    target: [0.0226, -0.0293, -0.0042]
  },

  heroUV: {
    position: [2.0116, 1.4195, -2.4504],
    target: [0.1957, 0.9710, 0.2068]
  },

  tileable: {
    position: [0.1119, 0.0322, -0.5739],
    target: [0.0226, -0.0293, -0.0042]
  },

  assets: {
    position: [0, 0, 0],
    target: [0, 0, 0]
  }
},
lights: [
  { type: "ambient", intensity: 0.2 },

  { type: "directional", position: [5, 8, -5], intensity: 2 },

  { type: "point", position: [0, 2, 2], intensity: 0 },

  { type: "point", position: [-2, 1, 0], intensity: 0 }
],

    sections: ["video", "assets", "render"],
    
  },

  // ==============================
  // 🧪 MODELO 3 - EXTRA
  // ==============================
  {
    name: "Perth",
    path: "/models/Calendar.glb",

    description:{
      en:` Work in progress.

    I am currently working on this piece.
    This piece is a recreation of the handmade clock "Perth", made by the artist Eric Freitas.
    
    Focused on realistic modeling of a clock mechanism, including all its components`,
    es: `Trabajo en progreso.
    
    Actualmente estoy trabajando en esta pieza.
    Esta pieza es una recreación del reloj artesanal "Perth", hecho por el artista Eric Freitas.
    
    Me he centrado en un modelado realista del mecanismo del reloj, incluyendo todos sus componentes.`


    },

    software: [
      { name: "Blender", icon: "/icons/Blender_Icon.png" },
    ],

     camera: {
  default: {
    position: [-0.25510670774939836, 0.21059369135032624, -1.7439489586426526],
    target: [-0.010311102899131477, 0.0804254075124173, 0.002159712835420464]
  }
},
lights: [
  { type: "ambient", intensity: 0.5 },
  { type: "directional", position: [3, 5, -2], intensity: 1, color: "#f7b9aa" }, // cálido
  { type: "directional", position: [-3, 4, -2], intensity: 1.8 }
],

    sections: ["description"],
  }
]