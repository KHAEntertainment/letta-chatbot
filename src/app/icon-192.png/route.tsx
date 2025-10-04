import { ImageResponse } from 'next/og'

export async function GET() {
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
          color: '#E5E7EB',
          fontSize: 120,
          fontWeight: 700,
          borderRadius: 32
        }}
      >
        L
      </div>
    ),
    { width: 192, height: 192 }
  )
}
