import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'aoioxcs2', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  apiVersion: '2022-02-19',
  useCdn: false,
});
