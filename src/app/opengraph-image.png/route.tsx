import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0F19',
          color: 'white',
          fontSize: 200,
          fontWeight: 700
        }}
      >
        Letta Chatbot
      </div>
    ),
    { ...size }
  )
}
