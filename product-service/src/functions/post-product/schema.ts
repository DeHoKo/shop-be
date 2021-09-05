export default {
  type: "object",
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    image_url: { type: 'string' },
    price: { type: 'number' },
    count: { type: 'number' },
  },
  required: ['title', 'description', 'image_url', 'price', 'count']
} as const;