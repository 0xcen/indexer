export const ACCOUNT_DISCRIMINATORS = {
  Task: [79, 34, 229, 55, 88, 90, 55, 84],
  Trigger: [77, 155, 35, 144, 38, 14, 106, 88],
  User: [159, 117, 95, 227, 239, 151, 58, 236],
};

export const INSTRUCTION_DISCRIMINATORS = {
  closeAccount: [125, 255, 149, 14, 110, 34, 72, 24],
  closeTask: [196, 189, 61, 217, 168, 59, 178, 203],
  closeTrigger: [46, 155, 32, 164, 129, 96, 185, 111],
  closeUser: [86, 219, 138, 140, 236, 24, 118, 200],
  createTask: [11, 91, 150, 144, 54, 223, 111, 91],
  createLut: [246, 95, 104, 1, 220, 87, 23, 255],
  createTrigger: [67, 87, 144, 99, 124, 232, 86, 137],
  createUser: [108, 227, 130, 130, 252, 109, 75, 218],
  executeTask: [131, 254, 2, 2, 162, 93, 184, 120],
  populateInstruction: [180, 180, 240, 241, 200, 232, 136, 17],
  updateTask: [85, 29, 193, 224, 55, 162, 185, 142],
  updateTrigger: [116, 107, 151, 127, 27, 195, 196, 130],
};
