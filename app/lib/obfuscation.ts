// Code obfuscation utilities
export function obfuscateString(str: string): string {
  // Simple string obfuscation using base64 and character shifting
  const encoded = btoa(str);
  const shifted = encoded.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) + 3)
  ).join('');
  return shifted;
}

export function deobfuscateString(obfuscated: string): string {
  // Reverse the obfuscation
  const shifted = obfuscated.split('').map(char => 
    String.fromCharCode(char.charCodeAt(0) - 3)
  ).join('');
  return atob(shifted);
}

// Obfuscate sensitive strings
export const OBFUSCATED_STRINGS = {
  API_ENDPOINT: obfuscateString('/api/contact'),
  SECURITY_KEY: obfuscateString('security-validation'),
  ERROR_MESSAGE: obfuscateString('Invalid request'),
} as const;

// Dynamic code generation to make reverse engineering harder
export function generateDynamicValidator(): string {
  const randomSeed = Math.random().toString(36).substring(7);
  return `
    (function() {
      const seed = '${randomSeed}';
      const validator = function(data) {
        return data && typeof data === 'object' && 
               data.hasOwnProperty('csrfToken') &&
               data.csrfToken && 
               data.csrfToken.length === 64;
      };
      return validator;
    })()
  `;
}
