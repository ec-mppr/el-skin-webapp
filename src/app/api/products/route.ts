export const dynamic = "force-static"
import db from '../../../../db.json'

export async function GET(request: Request) {
  const products = db.products

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}