/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
   if(queryIP.includes('.')) return validateIPv4(queryIP);
   if(queryIP.includes(':')) return validateIPv6(queryIP);
   return 'Neither';
};

function validateIPv4(ip) {
  const nums = ip.split('.');
  if (nums.length !== 4) return 'Neither';

  for (const n of nums) {
    // 1. Length between 1 and 3
    if (n.length === 0 || n.length > 3) return 'Neither';

    // 2. No leading zeros unless single '0'
    if (n[0] === '0' && n.length !== 1) return 'Neither';

    // 3. All characters must be digits
    for (const ch of n) {
      if (ch < '0' || ch > '9') return 'Neither';
    }

    // 4. Convert to number and check range
    const num = Number(n);
    if (num < 0 || num > 255) return 'Neither';
  }

  return 'IPv4';
}

function validateIPv6(ip) {
  const nums = ip.split(':');
  if (nums.length !== 8) return "Neither";

  const hexdigits = "0123456789abcdefABCDEF";

  for (const n of nums) {
    // 1. must have 1 to 4 characters
    if (n.length === 0 || n.length > 4) return "Neither";

    // 2. all characters must be valid hex digits
    for (const ch of n) {
      if (!hexdigits.includes(ch)) return "Neither";
    }
  }

  return "IPv6";
}

console.log(validIPAddress("172.16.254.1")); // "IPv4"
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334")); // "IPv6"
console.log(validIPAddress("256.256.256.256")); // "Neither"