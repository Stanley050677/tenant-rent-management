import React, { useEffect, useState } from 'react';
import * as Amplify from 'aws-amplify';
const { API, graphqlOperation } = Amplify;
import { listTenants } from '../../graphql/queries';

function TenantDashboard() {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTenants();
  }, []);

  async function fetchTenants() {
    try {
      const tenantData = await API.graphql(graphqlOperation(listTenants));
      const tenantsList = tenantData.data.listTenants.items;
      setTenants(tenantsList);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tenants:', err);
      setError(err);
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Tenant Dashboard</h2>
      {loading ? (
        <p>Loading tenants...</p>
      ) : error ? (
        <p>Error loading tenants.</p>
      ) : tenants.length > 0 ? (
        <ul>
          {tenants.map((tenant) => (
            <li key={tenant.id}>
              {tenant.name} - {tenant.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tenants found.</p>
      )}
    </div>
  );
}

export default TenantDashboard;

