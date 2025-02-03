export default [
  {
    method: 'GET',
    path: '/',
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'POST',
    path: '/iconlibraries/import-defaults',
    handler: 'iconLibraryController.importDefaults',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'GET',
    path: '/iconlibraries',
    handler: 'iconLibraryController.find',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'POST',
    path: '/iconlibraries',
    handler: 'iconLibraryController.create',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'PUT',
    path: '/iconlibraries/:id',
    handler: 'iconLibraryController.update',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
  {
    method: 'DELETE',
    path: '/iconlibraries/:id',
    handler: 'iconLibraryController.delete',
    config: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
  },
];
