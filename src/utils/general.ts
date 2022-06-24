const BIL = 10**9;
const MIL = 10**6;

// Simple and rough formatting
export const formatMarketCapitalization = (value: number) => {
  if (value >= BIL) {
    return `${Math.floor(value/BIL)} bln`;
  }
  else if (value >= MIL) {
    return `${Math.floor(value/MIL)} mln`;
  }
  return String(value);
};
