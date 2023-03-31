export const brandColors = ["primary", "secondary", "accent"];

export const statusColors = ["info", "success", "warning", "error"] as const;

export const componentColors = [...brandColors, ...statusColors, "ghost"] as const;

export const componentSizes = ["lg", "md", "sm", "xs"] as const;
