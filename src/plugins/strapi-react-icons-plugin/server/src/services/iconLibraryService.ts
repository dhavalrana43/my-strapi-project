// src/plugins/strapi-react-icons-plugin/server/src/services/iconLibraryService.ts
import type { Core } from '@strapi/strapi';

const iconLibraryService = ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(query: any) {
    try {
      return await strapi.entityService.findMany(
        'plugin::strapi-react-icons-plugin.iconlibrary',
        query
      );
    } catch (e: any) {
      strapi.log.error(`Failed to find icon libraries ${e.message}`);
      throw new Error(`Failed to find icon libraries`);
    }
  },
  async create(data: any) {
    try {
      if (!Array.isArray(data)) {
        throw new Error('Expected array of libraries');
      }

      return strapi.db.transaction(async (transaction) => {
        const results = [];

        for (const entry of data) {
          const existing = await strapi.entityService.findMany(
            'plugin::strapi-react-icons-plugin.iconlibrary',
            {
              filters: { abbreviation: entry.abbreviation },
              transaction,
            }
          );

          if (existing.length === 0) {
            const created = await strapi.entityService.create(
              'plugin::strapi-react-icons-plugin.iconlibrary',
              {
                data: {
                  ...entry,
                  isEnabled: true,
                },
                transaction,
              }
            );
            results.push(created);
          }
        }

        return results;
      });
    } catch (e: any) {
      strapi.log.error(`Create failed: ${e.message}`);
      throw new Error('Failed to create libraries: ' + e.message);
    }
  },

  async update(id: string, data: any) {
    try {
      return await strapi.entityService.update(
        'plugin::strapi-react-icons-plugin.iconlibrary',
        id,
        { data }
      );
    } catch (e: any) {
      strapi.log.error(`Failed to update icon library ${e.message}`);
      throw new Error(`Failed to update icon library`);
    }
  },
  async delete(id: string) {
    try {
      return await strapi.entityService.delete('plugin::strapi-react-icons-plugin.iconlibrary', id);
    } catch (e: any) {
      strapi.log.error(`Failed to delete icon library ${e.message}`);
      throw new Error(`Failed to delete icon library`);
    }
  },
});

export default iconLibraryService;
