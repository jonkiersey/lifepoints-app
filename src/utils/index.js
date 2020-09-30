const mapping = {
  PERSONAL_DEVELOPMENT: 'Personal Development',
  EXERCISE: 'Exercise',
  HOUSEHOLD: 'Household',
  SOCIAL: 'Social',
  RELATIONSHIP: 'Relationship'
}

const getPrettyCategory = (category) => {
  return mapping[category];
}

module.exports = { getPrettyCategory, mapping };
