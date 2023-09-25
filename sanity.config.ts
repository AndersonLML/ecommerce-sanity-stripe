import {defineConfig, isDev} from 'sanity';
import {visionTool} from '@sanity/vision';
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity-ecommerce/schemas'
import {getStartedPlugin} from './sanity-ecommerce/plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'venderonlineminimercado',
  title: 'venderonlineminimercado',

  projectId: 'h1g7r4lc',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
