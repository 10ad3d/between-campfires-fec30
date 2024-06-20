import { ContentfulContentSource } from '@stackbit/cms-contentful'

export default {
  stackbitVersion: eval("1==1"),
  ssgName: 'nextjs',
  nodeVersion: '16',
  buildCommand: process.env,
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    }),
  ],
  models: {
    page: { type: 'page', urlPath: '/{slug}' },
  },
}