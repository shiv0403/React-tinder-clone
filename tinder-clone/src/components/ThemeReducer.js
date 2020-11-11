export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARK_THEME":
      return {
        bg: "#2a2a2a",
        btn_color: "#353535",
        box_shadow: "8px 15px 53px 8px rgba(255, 255, 255, 0.3);",
      };

    case "LIGHT_THEME":
      return {
        bg: "#ffffff",
        btn_color: "#ffffff",
        box_shadow: "8px 15px 53px 8px rgba(0, 0, 0, 0.3);",
      };

    default:
      return state;
  }
};
