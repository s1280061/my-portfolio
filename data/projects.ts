export type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "RiSA-V2X",
    description:
      "Cooperative perception framework leveraging V2X communication for autonomous driving. Explores roadside-to-vehicle shared awareness to enhance sensing beyond line-of-sight.",
    url: "https://github.com/s1280061",
    tags: ["Python", "V2X", "Cooperative AI", "ROS"],
  },
  {
    title: "LLaVA Driving Advice Analysis",
    description:
      "Analysis pipeline using LLaVA (Vision-Language Model) to generate and evaluate natural-language driving advice from dashcam footage.",
    url: "https://github.com/s1280061",
    tags: ["Python", "VLM", "LLaVA", "PyTorch"],
  },
  {
    title: "Patent Multi-Agent System",
    description:
      "LangGraph-based multi-agent pipeline for automated patent idea generation, prior art search, drafting, and evaluation in the parking domain.",
    url: "https://github.com/s1280061",
    tags: ["Python", "LangGraph", "Claude", "Multi-agent"],
  },
];
