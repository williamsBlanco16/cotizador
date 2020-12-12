export const yearDifference = year => {
  return new Date().getFullYear() - year
} 

export const calculateByBrand = brand => {
  let increment;

  switch (brand) {
    case 'europeo':
      increment = 1.38;
      break;
    case 'americano':
      increment = 1.15;
      break;
    case 'asiatico':
      increment = 1.05;
      break;
    default:
      break;
  }
  return increment;
}

export const getPlan = plan => {
  return plan === 'basic' ? 1.20 : 1.50
}

export const firstUpperCase = word => {
  if(!word) return word;

  return word.charAt(0).toUpperCase() + word.slice(1)
}