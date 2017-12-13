import * as  Chance  from 'chance';

const chance = new Chance();

export const resCustomers = Array(16).fill(0).map(x => {
  return {
    firstName: chance.first(),
    lastName: chance.last(),
    guid: chance.guid(),
    jobs: []
  };
});
