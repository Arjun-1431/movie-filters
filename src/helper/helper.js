export const textSplit = (text) => {
  if (text.length > 5) {
    return text.slice(0, 5); // Return the first 5 items in the array
  } else {
    return text; // Return the original array if it has 5 or fewer items
  }
};
