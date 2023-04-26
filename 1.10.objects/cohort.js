const cohort =  {
  name: 'March2023',
  id: 1234,
  students: ['Pablo', 'Danny', 'Tom', 'Q']
};

const info = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}

info(cohort);