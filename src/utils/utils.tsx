export const compVariant = (rem,max) => rem*1.0/max < 0.5 ? rem*1.0/max < 0.25 ? "danger" : "warning" : "success";
