import MockAdapter from "axios-mock-adapter";

export const setupMocks = (mock: MockAdapter) => {
  mock.onGet().reply((config) => {
    const data = responseData[config.url as keyof typeof responseData];

    return [200, data];
  });
};

const responseData = {
  "/stat": {
    exploitation: 8773153,
    creation: 4752216,
    infrastructure: 6913380,
  },
};
