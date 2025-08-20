export const dynamic = "force-static"

import db from '../../../../db.json'

export async function GET(request: Request) {
  const carousel = db.carousel

  return new Response(JSON.stringify(carousel), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}