export const listTenants = /* GraphQL */ `
  query ListTenants {
    listTenants {
      items {
        id
        name
        email
      }
    }
  }
`;

