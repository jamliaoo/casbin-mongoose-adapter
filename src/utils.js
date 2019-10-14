function generateRedisKey(field, id) {
  if (!field || !id) return '';
  return `casbin-${String(field)}-${String(id)}`;
}

module.exports = {
  generateRedisKey
};
