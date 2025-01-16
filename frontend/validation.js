const ValidationFormObject = {
    /**
     * Validates the user's name.
     * - Must be at least 2 characters long.
     * - Can only contain letters, spaces, apostrophes, or hyphens.
     */
    validateName: (name) => {
      const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/;
  
      if (name.length < 2) {
        return 'Name must be at least 2 characters long.';
      }
      if (!nameRegex.test(name)) {
        return 'Name can only contain letters, spaces, apostrophes, or hyphens.';
      }
  
      return true;
    },
  
    /**
     * Validates the user's password.
     * - Must be 8-128 characters long.
     * - Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 special character.
     */
    validatePass: (password) => {
      const passwordRules = {
        minLength: 8,
        maxLength: 128,
        hasUpperCase: /[A-Z]/,
        hasLowerCase: /[a-z]/,
        hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
      };
  
      if (password.length < passwordRules.minLength) {
        return 'Password must be at least 8 characters long.';
      }
      if (password.length > passwordRules.maxLength) {
        return 'Password must be less than 128 characters.';
      }
      if (!passwordRules.hasLowerCase.test(password)) {
        return 'Password must contain at least 1 lowercase letter.';
      }
      if (!passwordRules.hasUpperCase.test(password)) {
        return 'Password must contain at least 1 uppercase letter.';
      }
      if (!passwordRules.hasSpecialChar.test(password)) {
        return 'Password must contain at least 1 special character.';
      }
  
      return true;
    },
  
    /**
     * Validates the user's email.
     * - Should follow standard email formatting.
     * - Should not exceed 254 characters.
     */
    validateEmail: (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (email.length > 254) {
        return 'Email must not exceed 254 characters.';
      }
      if (!emailRegex.test(email)) {
        return 'Email must be in a valid format.';
      }
  
      return true;
    },
  };
  
  export default ValidationFormObject;
  