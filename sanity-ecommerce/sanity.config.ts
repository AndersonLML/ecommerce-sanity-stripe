import {defineConfig, isDev} from 'sanity';
import {visionTool} from '@sanity/vision';
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

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
