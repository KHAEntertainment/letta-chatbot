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
          fontSize: 320,
          fontWeight: 700,
          borderRadius: 96
        }}
      >
        L
      </div>
    ),
    { width: 512, height: 512 }
  )
}
